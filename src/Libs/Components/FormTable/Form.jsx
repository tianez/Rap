/**
 * 表单通用
 */

import React, { Component } from "react";
import { createForm } from "rc-form";
import { NavBar, Icon, List, InputItem, TextareaItem, ImagePicker, Toast, Button, WhiteSpace } from "antd-mobile";
const Item = List.Item;

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";

import formValidator from "Utils/formValidator";

import ListForm from "./ListForm";

import styles from "./Form.scss";

const arrdata = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
const arrdata2 = [0, "01", "02", "03", "04", "05", "06", "07", "08", "09"];

export default class Form extends Component {
    static defaultProps = {
        rightTitle: "完成"
    };
    constructor(props) {
        super(props);
        let { moduleId, data } = props;
        let myDate = new Date();
        let year = myDate.getFullYear();
        let month = myDate.getMonth();
        let day = myDate.getDate();
        month = arrdata[month] || month;
        day = arrdata2[day] || day;
        let fudata = year + month + day + "_" + moduleId + "_" + localStorage.userId;
        let locData = localStorage[fudata] || "{}";
        data = data || JSON.parse(locData);
        this.state = {
            fudata: fudata,
            data: {
                // ...data
            },
            initdata: false
        };
    }
    componentDidMount() {
        this.handleInitData();
    }
    componentDidUpdate() {
        this.handleInitData();
    }
    handleInitData = props => {
        let { datajson } = this.props;
        let { initdata } = this.state;
        if (initdata || !datajson) {
            return;
        }
        let data = {};
        datajson.fields.map(field => {
            if (field.controlType == "WhiteSpace") {
                return;
            }
            data[field.name] = field.defaultValue;
        });
        this.setState({
            data,
            initdata: true
        });
    };
    /**
     * 提交表单
     */
    handleSubmit = () => {
        let { datajson, onSubmit } = this.props;
        let { data } = this.state;
        let res = formValidator(datajson.fields, data);
        if (res.length > 0) {
            return Toast.info(res[0]);
        }
        console.log(res);
        console.log(data);
        onSubmit &&
            onSubmit({
                ...data
            });
    };
    handleChange = (name, value) => {
        let { data, fudata } = this.state;
        data[name] = value;
        this.setState({ data });
        localStorage[fudata] = JSON.stringify(data);
    };
    render() {
        let { title, datajson, rightTitle } = this.props;
        let { data } = this.state;
        return (
            <Layout>
                <NavBar
                    mode="light"
                    icon={<LeftIcon />}
                    rightContent={<span onClick={this.handleSubmit}>{rightTitle}</span>}
                >
                    {title}
                </NavBar>
                <Content>
                    {datajson && <ListForm json={datajson} data={data} onChange={this.handleChange} />}
                    <WhiteSpace />
                </Content>
            </Layout>
        );
    }
}
