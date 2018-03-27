import React, { Component } from "react";
import { Table, Input, Button, Checkbox } from "antd";
const CheckboxGroup = Checkbox.Group;
const Search = Input.Search;
const columns = [
    {
        title: "姓名",
        dataIndex: "personname",
        key: "personname"
    },
    {
        title: "电话",
        dataIndex: "phonenumber1",
        key: "phonenumber1"
    }
];

const options = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" }
];

import styles from "./MemberModal.scss";
import ModalView from "Views/Layout/ModalView";

import { contextConsumers } from "Libs/ContextRudex";
import reqUserList from "Hoc/ReqUserList";
import ReqDepartment from "Hoc/ReqDepartment";

const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
    margin: "5px 0",
    flex: 1
};

@contextConsumers(context => ({
    userList: context.getIn(["userList", localStorage.orgId]),
    deptList: context.getIn(["deptList", localStorage.orgId])
}))
@reqUserList("userList")
@ReqDepartment("deptList")
export default class MemberModal extends Component {
    constructor(props) {
        super(props);
        let selectedRowKeys = props.selectedRowKeys || [];
        this.state = {
            userList: [],
            selectedRowKeys: selectedRowKeys,
            selectedRows: [],
            selectedRowsInit: false
        };
    }
    componentDidMount() {
        this.handleInitSelectedRowKeys();
    }
    componentDidUpdate() {
        this.handleInitSelectedRowKeys();
    }
    handleInitSelectedRowKeys = () => {
        let { userList } = this.props;
        let { selectedRowKeys, selectedRowsInit } = this.state;
        if (!userList || selectedRowsInit) {
            return;
        }
        let selectedRows = userList.filter(d => {
            return selectedRowKeys.indexOf(d.userId) > -1;
        });
        this.setState({
            selectedRowsInit: true,
            selectedRows
        });
    };
    onSelectChange = (selectedRowKeys, selectedRows) => {
        let { selectedRowKeys: oldselectedRowKeys, selectedRows: oldselectedRows } = this.state;
        let deleteKeys = oldselectedRowKeys.filter(d => {
            return selectedRowKeys.indexOf(d) == -1;
        });
        let oldRow = oldselectedRows.filter(d => {
            return deleteKeys.indexOf(d.userId) == -1;
        });
        let addKeys = selectedRowKeys.filter(d => {
            return oldselectedRowKeys.indexOf(d) == -1;
        });
        let newRow = selectedRows.filter(d => {
            return addKeys.indexOf(d.userId) > -1;
        });
        let newselectedRows = [].concat(oldRow, newRow);
        this.setState({ selectedRowKeys, selectedRows: newselectedRows });
    };
    handleChange = () => {
        let { onChange } = this.props;
        let { selectedRowKeys, selectedRows } = this.state;
        onChange(selectedRowKeys, selectedRows);
    };
    handleSearch = filter => {
        this.setState({
            filter
        });
    };
    handleSelectAll = () => {
        let { userList } = this.props;
        let selectedRowKeys = userList.map(d => {
            return d.userId;
        });
        this.setState({ selectedRowKeys, selectedRows: userList });
    };
    handleSelectDel = () => {
        this.setState({ selectedRowKeys: [], selectedRows: [] });
    };
    handleRowClick = record => {
        let { onChange, multiple, selectedRowKeys = [] } = this.props;
        if (multiple) {
            return;
        }
        selectedRowKeys = selectedRowKeys.concat(record.userId);
        onChange(selectedRowKeys, record);
    };
    handleChangeDep = e => {
        let { userList } = this.props;
        let { selectedRowKeys, selectedRows } = this.state;
        let { value, checked } = e.target;
        if (checked) {
            let users = userList.filter(user => {
                return user.depIds.indexOf(value) > -1 && selectedRowKeys.indexOf(user.userId) == -1;
            });
            let userKeys = users.map(d => {
                return d.userId;
            });
            selectedRowKeys = selectedRowKeys.concat(userKeys);
            selectedRows = selectedRows.concat(users);
        } else {
            selectedRows = selectedRows.filter(user => {
                return user.depIds.indexOf(value) == -1;
            });
            selectedRowKeys = selectedRows.map(d => {
                return d.userId;
            });
        }
        this.setState({ selectedRowKeys, selectedRows });
    };
    handleFilterDeptList = (userList, deptList, selectedRowKeys) => {
        if (!userList || !deptList) {
            return [];
        }
        deptList = deptList.map(dep => {
            let users = userList.filter(d => {
                return d.depIds.indexOf(dep.id) > -1;
            });
            if (users.length == 0) {
                return;
            }
            let selKeys = users.filter(user => {
                return selectedRowKeys.indexOf(user.userId) > -1;
            });
            let checked = false;
            if (selKeys.length == users.length) {
                checked = true;
            }
            return {
                ...dep,
                users,
                checked
            };
        });
        deptList = deptList.filter(d => {
            return d;
        });
        return deptList;
    };
    render() {
        let { userList, deptList, multiple, onCancel } = this.props;
        let { selectedRowKeys, filter } = this.state;
        if (filter) {
            userList = userList.filter(user => {
                return user.personname.indexOf(filter) > -1 || user.phonenumber1.indexOf(filter) > -1;
            });
        }
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        };
        let props = {
            rowKey: "userId",
            dataSource: userList,
            columns
        };
        if (multiple) {
            deptList = this.handleFilterDeptList(userList, deptList, selectedRowKeys);
            props = {
                ...props,
                rowSelection
            };
        }
        return (
            <ModalView>
                <div className={styles.warper}>
                    <div onClick={onCancel} className={styles.close}>
                        ×
                    </div>
                    <div className={styles.btns}>
                        <Search
                            placeholder="请输入搜索的用户姓名或者电话号码"
                            onSearch={this.handleSearch}
                            enterButton={"搜索"}
                            className={styles.search}
                        />
                        {multiple && (
                            <div>
                                <Button type="primary" className={styles.btn} onClick={this.handleSelectAll}>
                                    全选
                                </Button>
                                <Button type="primary" className={styles.btn} onClick={this.handleSelectDel}>
                                    全部取消
                                </Button>
                                <Button type="primary" className={styles.btn} onClick={this.handleChange}>
                                    确定（选中{selectedRowKeys.length}人）
                                </Button>
                            </div>
                        )}
                    </div>
                    <div className={styles.tableContainer}>
                        {multiple && (
                            <div className={styles.tree}>
                                {deptList &&
                                    deptList.map(d => {
                                        return (
                                            <Checkbox
                                                value={d.id}
                                                style={radioStyle}
                                                checked={d.checked}
                                                onChange={this.handleChangeDep}
                                            >
                                                {d.name}
                                            </Checkbox>
                                        );
                                    })}
                            </div>
                        )}
                        <Table
                            style={{ flex: 1 }}
                            {...props}
                            onRow={record => {
                                return {
                                    onClick: e => {
                                        this.handleRowClick(record);
                                    }
                                };
                            }}
                        />
                    </div>
                </div>
            </ModalView>
        );
    }
}
