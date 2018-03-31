/**
 * 修改考勤组基本信息
 */
import React, { Component } from "react";
import GroupBasicInfo from "./AddGroup/GroupBasicInfo";

import formatIn from "./AddGroup/formatIn";
import formatOut from "./AddGroup/formatOut";

import { Toast } from "antd-mobile";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    query: state.query
}))
export default class AttendanceGroupEdit extends Component {
    constructor(props) {
        super(props);
        let state = formatIn(props.history.location.state);
        console.log(state);
        this.state = state;
    }
    handleChange = (name, value) => {
        let state = this.state;
        state[name] = value;
        this.setState(state);
    };
    handleSave = async () => {
        let data = formatOut(this.state);
        console.log(data);
        let res = await Request("attendanceGroup/updateMember", {
            method: "post",
            data: data
        });
        if (res.success) {
            Toast.info("保存成功");
            window.history.back();
        } else {
            Toast.info(res.message);
        }
    };
    render() {
        let { melocation } = this.props;
        let props = {
            data: this.state,
            onChange: this.handleChange,
            onChangeDate: this.handleChangeDate,
            melocation: melocation,
            bartitle: "编辑考勤组"
        };
        return <GroupBasicInfo {...props} onSave={this.handleSave} />;
    }
}
