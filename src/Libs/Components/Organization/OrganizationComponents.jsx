/**
 * 组织架构组件
 * onSelected：点击人员列表项回调函数
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import { SearchBar } from "antd-mobile";

import styles from "./OrganizationComponents.scss";

import DepList from "./DepList";
import UserList from "./UserList";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

import filterData from "./filterData";

import reqDeptsAction from "Hoc/reqDeptsAction";
import reqUsersAction from "Hoc/reqUsersAction";
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    deptlist: state.getIn(["deptList", localStorage.organizationId]),
    userlists: state.getIn(["userList", localStorage.organizationId]),
    breadcrumbs: state.getIn(["Breadcrumbs", localStorage.organizationId, "organizationbreadcrumbs"]) || $arr
}))
export default class OrganizationComponents extends Component {
    static defaultProps = {
        multiple: false,
        selectedKeys: $arr
    };
    constructor(props) {
        super(props);
        this.state = {
            deptlist: $arr,
            userlist: $arr,
            searchValue: "",
            selectedKeys: $arr.concat(props.selectedKeys),
            selectedDevs: $obj,
            bk: ""
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        let state = filterData(nextProps, prevState.searchValue);
        return state;
    }
    componentDidMount() {
        let { deptlist, userlists } = this.props;
        if (!deptlist) {
            this.props.dispatch.callBack(reqDeptsAction);
        }
        if (!userlists) {
            this.props.dispatch.callBack(reqUsersAction);
        }
    }
    /**
     * 创建水印图片
     */
    watermark = () => {
        let canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;
        let ctx = canvas.getContext("2d");
        ctx.rotate(-15 * Math.PI / 180);
        ctx.font = "16px Arial";
        ctx.globalAlpha = 0.25;
        ctx.fillStyle = "#3692fa";
        ctx.textAlign = "center";
        ctx.fillText(localStorage.userName, 40, 60);
        let DataURL = canvas.toDataURL();
        this.setState({
            bk: DataURL
        });
    };
    /**
     * 搜索栏变化
     */
    handleSearchChange = searchValue => {
        let state = filterData(this.props, searchValue);
        this.setState({
            ...state,
            searchValue
        });
    };
    /**
     * 点击面包屑导航
     */
    handleChangeBreadcrumbs = index => {
        let { breadcrumbs, dispatch } = this.props;
        breadcrumbs = breadcrumbs.slice(0, index);
        dispatch.setIn(["Breadcrumbs", localStorage.organizationId, "organizationbreadcrumbs"], breadcrumbs);
    };
    /**
     * 选择操作
     */
    handleClickUser = data => {
        let { onClickUser, multiple } = this.props;
        if (multiple) {
            this.handleMultipleSelect(data);
        } else {
            onClickUser && onClickUser(data);
        }
    };
    /**
     * 多选
     */
    handleMultipleSelect = data => {
        let { selectedKeys } = this.state;
        let index = selectedKeys.indexOf(data.userId);
        if (index == -1) {
            selectedKeys = selectedKeys.concat([data.userId]);
        } else {
            selectedKeys = selectedKeys.filter(d => {
                return d != data.userId;
            });
        }
        this.setState({
            selectedKeys
        });
    };
    /**
     * 全选
     */
    handleSelectAll = e => {
        let { userlists, deptlist } = this.props;
        let { selectedDevs } = this.state;
        let selectedKeys = userlists.map(user => {
            return user.userId;
        });
        deptlist = deptlist.map(d => {
            selectedDevs = selectedDevs.set(d.id, 1);
            return d;
        });
        this.setState({
            selectedKeys,
            selectedDevs
        });
    };
    /**
     * 全部取消
     */
    handleSelectDelAll = () => {
        let { deptlist } = this.props;
        let { selectedDevs } = this.state;
        deptlist = deptlist.map(d => {
            selectedDevs = selectedDevs.set(d.id, 0);
            return d;
        });
        this.setState({
            selectedKeys: $arr,
            selectedDevs
        });
    };

    /**
     * 全选部门
     */
    handleSelectDep = data => {
        let depid = data.id;
        let { selectedKeys, selectedDevs } = this.state;
        if (selectedDevs[depid] == 1) {
            selectedDevs = selectedDevs.set(depid, 0);
            data.member.map(d => {
                selectedKeys = selectedKeys.filter(k => {
                    return k !== d.userId;
                });
            });
        } else {
            selectedDevs = selectedDevs.set(depid, 1);
            data.member.map(d => {
                let index = selectedKeys.indexOf(d.userId);
                if (index == -1) {
                    selectedKeys = selectedKeys.concat([d.userId]);
                }
            });
        }
        this.setState({
            selectedKeys,
            selectedDevs
        });
    };

    /**
     * 点击部门列表
     */
    handleClickDep = (list, e) => {
        let { breadcrumbs, dispatch } = this.props;
        breadcrumbs = breadcrumbs.concat(list);
        dispatch.setIn(["Breadcrumbs", localStorage.organizationId, "organizationbreadcrumbs"], breadcrumbs);
    };
    /**
     * 点击头部返回按钮
     */
    handleLeftClick = e => {
        e.stopPropagation();
        this.props.onLeftClick();
    };
    /**
     * 点击头部右边按钮
     */
    handleRightClick = e => {
        e.stopPropagation();
        let { onSelected } = this.props;
        let { selected } = this.state;
        onSelected && onSelected(selected);
    };
    render() {
        let { breadcrumbs, userlists = $arr, multiple, children } = this.props;
        let { deptlist, userlist, searchValue, selectedDevs, selectedKeys } = this.state;
        let selectedUsers = userlists.filter(user => {
            return selectedKeys.indexOf(user.userId) > -1;
        });
        return ReactDOM.createPortal(
            <Layout>
                {children && children(selectedKeys, selectedUsers)}
                <SearchBar placeholder="Search" value={searchValue} onChange={this.handleSearchChange} />
                <Breadcrumbs breadcrumbs={breadcrumbs} onChangeBreadcrumbs={this.handleChangeBreadcrumbs} />
                {multiple && (
                    <div className={styles.actionStatus}>
                        <div className={styles.selectAll} onClick={this.handleSelectAll}>
                            全选
                        </div>
                        <div className={styles.selectAll} onClick={this.handleSelectDelAll}>
                            全部取消
                        </div>
                        <div className={styles.selectcount}>
                            选中{selectedKeys.length}人/共{userlists.length}人
                        </div>
                    </div>
                )}
                <Content>
                    {!searchValue && (
                        <DepList
                            deptlist={deptlist}
                            multiple={multiple}
                            selectedDevs={selectedDevs}
                            selectedKeys={selectedKeys}
                            onClick={this.handleClickDep}
                            onSelectDep={this.handleSelectDep}
                        />
                    )}
                    {searchValue && (
                        <UserList userlist={userlist} onClick={this.handleClickUser} tip="没有搜索到相关用户信息" />
                    )}
                    {breadcrumbs.length > 0 &&
                        !searchValue && (
                            <UserList
                                multiple={multiple}
                                selectedKeys={selectedKeys}
                                onClick={this.handleClickUser}
                                userlist={userlist}
                            />
                        )}
                </Content>
            </Layout>,
            document.getElementById("app")
        );
    }
}
