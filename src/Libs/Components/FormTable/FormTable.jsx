/**
 * 表单通用
 */

import React, { Component } from "react";
import { NavBar, Icon, List, InputItem, TextareaItem, ImagePicker, Toast, Button, WhiteSpace } from "antd-mobile";
const Item = List.Item;

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";

import formValidator from "Utils/formValidator";

import ListForm from "./ListForm";

export default class Form extends Component {
    static defaultProps = {
        rightTitle: "保存",
        headerTitle: "模块名称"
    };
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isinit: false
        };
    }
    componentDidMount() {
        this.handleInitData();
    }
    componentDidUpdate() {
        this.handleInitData();
    }
    handleInitData = props => {
        let { fields, data } = this.props;
        let { isinit } = this.state;
        if (isinit || !fields) {
            return;
        }
        let initData = {};
        fields.map(field => {
            if (field.controlType == "WhiteSpace") {
                return;
            }
            initData[field.name] = field.defaultValue;
        });
        data = {
            ...initData,
            ...data
        };
        this.setState({
            data,
            isinit: true
        });
    };
    handleChange = (name, value) => {
        let { data, fudata } = this.state;
        data[name] = value;
        this.setState({ data });
    };
    /**
     * 提交表单
     */
    handleSubmit = () => {
        let { fields, onSubmit } = this.props;
        let { data } = this.state;
        let res = formValidator(fields, data);
        if (res.length > 0) {
            return Toast.info(res[0]);
        }
        onSubmit && onSubmit(data);
    };
    render() {
        let { fields, rightTitle, headerTitle } = this.props;
        let { data } = this.state;
        return (
            <Layout>
                <NavBar
                    mode="light"
                    icon={<LeftIcon />}
                    rightContent={<span onClick={this.handleSubmit}>{rightTitle}</span>}
                >
                    {headerTitle}
                </NavBar>
                <Content>
                    <ListForm fields={fields} data={data} onChange={this.handleChange} />
                </Content>
            </Layout>
        );
    }
}
