/**
 * 编辑规则
 */
import React, { Component } from "react";
import GroupRule from "./AddGroup/GroupRule";

import formatIn from "./AddGroup/formatIn";
import formatOut from "./AddGroup/formatOut";

import { Toast } from "antd-mobile";

import reqScheduleAction from "Hoc/reqScheduleAction";
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    query: state.query,
    schedules: state.getIn(["schedules", localStorage.organizationId])
}))
export default class AttendanceGroupEditRule extends Component {
    constructor(props) {
        super(props);
        let state = formatIn(props.history.location.state);
        this.state = state;
    }
    componentDidMount() {
        this.props.dispatch.callBack(reqScheduleAction);
    }
    handleChange = (name, value) => {
        let state = this.state;
        state[name] = value;
        this.setState(state);
    };
    /**
     * 改变考勤日期
     */
    handleChangeDate = workDayList => {
        let state = this.state;
        this.setState({ ...state, ...workDayList });
        window.history.back();
    };
    handleSave = async () => {
        let data = formatOut(this.state);
        let res = await Request("attendanceGroup/updateRule", {
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
            melocation: melocation
        };
        return <GroupRule {...props} onSave={this.handleSave} />;
    }
}
