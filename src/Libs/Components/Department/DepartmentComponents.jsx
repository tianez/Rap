/**
 * 选择部门
 */

import React, { Component } from "react";
import ReactDOM from "react-dom";

import { List, WhiteSpace, Modal, Toast } from "antd-mobile";
const Item = List.Item;
const prompt = Modal.prompt;

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";

import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

import DepartmentHeader from "./DepartmentHeader";
import SelectedItems from "./SelectedItems";
import DeptList from "./DeptList";

import styles from "./Department.scss";

/**
 * breadcrumbsInit：是否每次进入组件都初始化面包屑
 * onSelected()：选择完成后回调函数，单选为选中对象，多选为选中部门数组ID
 * onLeftClick()：顶部菜单返回键按钮点击事件
 * multiple：是否是多选，默认false
 * selected：默认选中的数组id，[]
 * disabled：禁止选中的数组id，[]
 */
import reqDeptsAction from "Hoc/reqDeptsAction";
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    deptlist: state.getIn(["deptList", localStorage.organizationId]),
    orgInfo: state.orgInfo
}))
class Department extends Component {
    static defaultProps = {
        multiple: true,
        selectedKeys: $arr
    };
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: $arr.concat(props.selectedKeys),
            breadcrumbs: $arr
        };
    }
    componentDidMount() {
        let { deptlist } = this.props;
        if (!deptlist) {
            this.props.dispatch.callBack(reqDeptsAction);
        }
    }
    /**
     * onLeftClick
     */
    handleLeftClick = e => {
        e.stopPropagation();
        this.props.onLeftClick();
    };
    /**
     * 新增部门模态输入框
     */
    handleShowModal = () => {
        prompt(
            "",
            "请输入部门名称",
            [{ text: "取消" }, { text: "确定", onPress: this.handleSubmit }],
            "default",
            null,
            ["部门名称"]
        );
    };
    /**
     * 新增部门确定
     */
    handleSubmit = async name => {
        // Toast.info('onPress promise', 1);
        console.log(`value:${name}`);
        let { departments, breadcrumbs } = this.props;
        let { items } = this.state;
        let size = breadcrumbs.size;
        let breadcrumbId = size == 0 ? 0 : breadcrumbs.getIn([size - 1, "id"]);
        let res = await Request("deptment/insertDeptment", {
            method: "post",
            data: {
                orginfoId: localStorage.organizationId,
                name: name,
                parent: breadcrumbId
            }
        });
        if (res.success) {
            departments = departments.push(fromJS(res.data.dc));
            this.props.dispatch("Departments/setIn", [[localStorage.organizationId], departments]);
            Toast.info("新增成功", 2);
        } else {
            Toast.info(res.message, 2);
        }
    };
    /**
     * 选择下级菜单
     */
    handleChangeLists = list => {
        let { breadcrumbs } = this.state;
        breadcrumbs = breadcrumbs.concat([list]);
        this.setState({
            breadcrumbs
        });
    };
    /**
     * 点击面包屑导航
     */
    handleChangeBreadcrumbs = index => {
        let { breadcrumbs } = this.state;
        breadcrumbs = breadcrumbs.slice(0, index);
        this.setState({
            breadcrumbs
        });
    };

    /**
     * 选中当前菜单
     */
    handleChecked = data => {
        let { multiple } = this.props;
        if (multiple) {
            this.handleMultiplechecked(data);
        } else {
            this.handleSingleCompleted(data);
        }
    };
    /**
     * multiple 多选
     */

    handleMultiplechecked = data => {
        let { selectedKeys } = this.state;
        let index = selectedKeys.indexOf(data.id);
        if (index == -1) {
            selectedKeys = selectedKeys.concat([data.id]);
        } else {
            selectedKeys = selectedKeys.filter(d => {
                return d != data.id;
            });
        }
        this.setState({
            selectedKeys
        });
    };
    /**
     * 单选完成
     */
    handleSingleCompleted = data => {
        let { onSelected } = this.props;
        onSelected && onSelected(data);
    };

    /**
     * 多选完成
     */
    handleMultipleCompleted = () => {
        let { onSelected, deptlist = $arr } = this.props;
        let { selectedKeys } = this.state;
        let selectedRows = deptlist.filter(d => {
            return selectedKeys.indexOf(d.id) > -1;
        });
        onSelected && onSelected(selectedKeys, selectedRows);
    };

    handleFilter = (lists, breadcrumbs) => {
        let length = breadcrumbs.length;
        let breadcrumbId = length == 0 ? 0 : breadcrumbs.getIn([length - 1, "id"]);
        lists = lists.filter(list => {
            return list.parent == breadcrumbId;
        });
        return lists;
    };
    render() {
        let { deptlist = $arr, multiple, title } = this.props;
        let { selectedKeys, breadcrumbs } = this.state;

        // let selecteditems = departments.filter(dep => {
        //     return selected.indexOf(dep.get("id")) != -1;
        // });
        deptlist = this.handleFilter(deptlist, breadcrumbs);
        return ReactDOM.createPortal(
            <Layout>
                <DepartmentHeader
                    multiple={multiple}
                    onLeftClick={this.handleLeftClick}
                    onRightClick={this.handleMultipleCompleted}
                >
                    {title}
                </DepartmentHeader>
                <Breadcrumbs onChangeBreadcrumbs={this.handleChangeBreadcrumbs} breadcrumbs={breadcrumbs} />
                <Content>
                    {/* <SelectedItems multiple={multiple} selecteditems={selecteditems} onClick={this.handleChecked} /> */}
                    <List style={{ marginTop: "6px" }}>
                        <Item onClick={this.handleShowModal}>
                            <span className={styles.add}>+</span>新建部门
                        </Item>
                    </List>
                    <DeptList
                        multiple={multiple}
                        deptlist={deptlist}
                        selectedKeys={selectedKeys}
                        onClick={this.handleChecked}
                        onChangeLists={this.handleChangeLists}
                    />
                </Content>
            </Layout>,
            document.getElementById("app")
        );
    }
}

export default Department;
