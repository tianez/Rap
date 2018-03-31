/**
 * 表单通用
 */

import React, { Component } from "react";
import { NavBar, Toast } from "antd-mobile";

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
            data: $obj,
            isinit: false
        };
    }
    handleChange = (name, value) => {
        let { onChange } = this.props;
        if (onChange) {
            let { data } = this.props;
            data = $obj.merge(data);
            data = data.set(name, value);
            onChange(data);
        } else {
            let { data } = this.state;
            data = $obj.merge(data);
            data = data.set(name, value);
            this.setState({ data });
        }
    };
    /**
     * 提交表单
     */
    handleSubmit = () => {
        let { fields = $arr, onSubmit, onChange, data } = this.props;
        data = onChange ? data : this.state.data;
        let initdata = $obj;
        fields.map(f => {
            if (f.defaultValue) {
                initdata = initdata.set(f.name, f.defaultValue);
            }
        });
        data = initdata.merge(data);
        let res = formValidator(fields, data);
        if (res.length > 0) {
            return Toast.info(res[0]);
        }
        onSubmit && onSubmit(data);
        return data;
    };
    render() {
        let { children, onChange, fields, data, rightTitle, headerTitle } = this.props;
        data = onChange ? data : this.state.data;
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
                    {children}
                </Content>
            </Layout>
        );
    }
}
