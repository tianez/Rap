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
        multiple: false,
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
        // let { deptlist } = this.props;
        // if (!deptlist) {
        this.props.dispatch.callBack(reqDeptsAction);
        // }
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
        let { breadcrumbs } = this.state;
        let length = breadcrumbs.length;
        let breadcrumbId = length == 0 ? 0 : breadcrumbs.getIn([length - 1, "id"]);
        let res = await Request("deptment/insertDeptment", {
            method: "post",
            data: {
                orginfoId: localStorage.organizationId,
                name: name,
                parent: breadcrumbId
            }
        });
        console.log(res);
        if (res.success) {
            this.props.dispatch.callBack(reqDeptsAction);
            Toast.info("新增成功");
        } else {
            Toast.info(res.message);
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
     * 单选
     */
    handleSingleCompleted = data => {
        let { onSelected } = this.props;
        onSelected && onSelected(data);
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
        let { deptlist = $arr, multiple, children } = this.props;
        let { selectedKeys, breadcrumbs } = this.state;
        let selectedRows = deptlist.filter(d => {
            return selectedKeys.indexOf(d.id) > -1;
        });
        deptlist = this.handleFilter(deptlist, breadcrumbs);
        return ReactDOM.createPortal(
            <Layout>
                {children && children(selectedKeys, selectedRows)}
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
