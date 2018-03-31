/**
 * 编辑员工
 */

import React, { Component } from "react";
import { Toast } from "antd-mobile";

import asyncComponent from "Extended/asyncComponent";
const FormTable = asyncComponent(() => import("Components/FormTable/FormTable"), true);
import fields from "./fieldJson";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    deptlist: state.getIn(["deptList", localStorage.organizationId]),
    userlists: state.getIn(["userList", localStorage.organizationId])
}))
export default class MemberEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        this.getUserInfo();
    }
    getUserInfo = async () => {
        let { match } = this.props;
        let user = await Request("relation/getUserdet", {
            params: {
                userId: match.params.id
            }
        });
        if (user.success) {
            this.setState({
                data: user.data.detail
            });
        }
    };
    /**
     * 提交保存
     */
    handleSubmit = async data => {
        let { id } = this.props.match.params;
        let res = await Request("relation/update", {
            method: "post",
            data: data
        });
        if (res.success) {
            Toast.info("更新成功");
        } else {
            Toast.info(res.message);
        }
    };
    render() {
        let { data } = this.state;
        return data ? (
            <FormTable fields={fields} data={data} headerTitle="编辑用户信息" onSubmit={this.handleSubmit} />
        ) : null;
    }
}
