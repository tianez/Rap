/**
 * 部门管理
 */

import React, { Component } from "react";

import { Link } from "react-router-dom";

import { NavBar, Icon, List, InputItem, WhiteSpace, Toast, Switch } from "antd-mobile";
const Item = List.Item;

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import DepartmentComponents from "Components/Department/DepartmentComponents";

import styles from "./Department.scss";

class DepartmentIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    /**
     * 选择部门返回按钮事件
     */
    handleDepartmentLeftClick = () => {
        window.history.back();
    };
    /**
     * 选中部门回调
     */
    handleDepartmentChecked = (keys, data) => {
        console.log(keys);
        console.log(data);
    };
    render() {
        return (
            <DepartmentComponents
                title="部门管理"
                onLeftClick={this.handleDepartmentLeftClick}
                onSelected={this.handleDepartmentChecked}
            />
        );
    }
}

export default DepartmentIndex;
