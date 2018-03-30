import React, { Component } from "react";
import { NavBar, List, Toast, InputItem, WhiteSpace, Icon } from "antd-mobile";
const Item = List.Item;
import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";
import TextEditor3 from "Components/TextEditor/TextEditor3";

import SelectUserCpt from "Components/Form/SelectUserCpt";
import formValidator from "Utils/formValidator";

import styles from "./NoticePublic.scss";

import formatOut from "./formatOut";

const fields = [
    {
        name: "title",
        rules: [{ required: true, message: "必须填写公告标题" }]
    },
    {
        name: "content",
        rules: [{ required: true, message: "必须填写公告内容" }]
    },
    {
        name: "approver",
        rules: [{ required: true, message: "必须选择审批人" }]
    },
    {
        name: "sendRangeList",
        rules: [{ required: true, message: "必须选择接收人" }]
    }
];

const approvedfield = {
    title: "审批人",
    id: "approver",
    name: "approver",
    repeat: true
};

const sendRangeListfield = {
    title: "接收人",
    id: "sendRangeList",
    name: "sendRangeList",
    step: false,
    multiple: true
};

export default class NoticePublic extends Component {
    state = {
        data: {
            organization: localStorage.organizationId,
            publisherId: localStorage.userId,
            author: localStorage.userId,
            cc: "[]",
            sendRangeList: [],
            approver: [],
            title: ""
        }
    };
    handleChange = (name, value) => {
        let { data } = this.state;
        data[name] = value;
        this.setState({
            data
        });
    };
    handleSubmit = async () => {
        let { data } = this.state;
        let vres = formValidator(fields, data);
        if (vres.length > 0) {
            return Toast.info(vres[0]);
        }
        let reqdata = Object.assign({}, data);
        reqdata = formatOut(reqdata);
        let res = await Request.post("bulletinInformation/addBulletin", reqdata);
        Toast.info(res.message);
        if (res.success) {
            window.history.back();
        }
    };

    render() {
        let { data } = this.state;
        return (
            <Layout>
                <NavBar mode="light" icon={<LeftIcon />} rightContent={<span onClick={this.handleSubmit}>提交</span>}>
                    发公告
                </NavBar>
                <Content>
                    <List renderHeader={() => "公告标题"}>
                        <InputItem clear defaultValue={data.title} onChange={e => this.handleChange("title", e)} />
                    </List>
                    <List renderHeader={() => "公告内容"}>
                        <TextEditor3 onChange={this.handleChange} value={data.content} />
                    </List>
                    <div style={{ fontSize: "12px", color: "#666", lineHeight: "18px", padding: "5px 15px 10px" }}>
                        公告内容目前移动版只支持简单的文字编辑，如要插入图片等复杂操作，请使用PC版
                    </div>
                    <SelectUserCpt />
                    {/* <WhiteSpace /> */}
                </Content>
            </Layout>
        );
    }
}
