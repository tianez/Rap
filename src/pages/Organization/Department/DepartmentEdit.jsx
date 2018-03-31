/**
 * 部门详细
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";

import { NavBar, Icon, List, InputItem, WhiteSpace, Toast } from "antd-mobile";
const Item = List.Item;

import asyncComponent from "Extended/asyncComponent";
const FormTable = asyncComponent(() => import("Components/FormTable/FormTable"), true);
import fields from "./fieldJson";

import ParentDep from "./Components/ParentDep";

import styles from "./DepartmentEdit.scss";

export default class DepartmentEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    componentWillMount() {
        this.getDepInfo();
    }
    /**
     * 获取部门信息
     */
    getDepInfo = async () => {
        let res = await Request("deptment/selectDeptById", {
            params: {
                id: this.props.match.params.id
            }
        });
        if (res.success) {
            this.setState({
                data: res.data.dc
            });
        } else {
            Toast.info(res.message);
        }
    };
    handleChange = data => {
        this.setState({
            data
        });
    };
    /**
     * 提交保存
     */
    handleSubmit = async data => {
        let res = await Request("deptment/updateDeptment", {
            method: "post",
            data: data
        });
        if (res.success) {
            Toast.info("更新成功");
            window.history.back();
        } else {
            Toast.info(res.message);
        }
    };
    /**
     * 删除部门
     */
    handleDelete = async () => {
        let { match } = this.props;
        let res = await Request("deptment/deleteDeptment", {
            method: "post",
            data: {
                // orginfoId: localStorage.organizationId,
                id: match.params.id
            }
        });
        if (res.success) {
            window.history.back();
        }
        Toast.info(res.message);
    };
    render() {
        let { data } = this.state;
        return (
            <FormTable
                fields={fields}
                data={data}
                headerTitle="编辑部门"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            >
                <ParentDep name={"parent"} data={data} onChange={this.handleChange} />
                <List renderHeader={() => "危险操作"}>
                    <Item placeholder="选填" onClick={this.handleDelete}>
                        删除部门
                    </Item>
                </List>
            </FormTable>
        );
    }
}
