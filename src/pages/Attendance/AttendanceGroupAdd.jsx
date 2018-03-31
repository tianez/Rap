import React, { Component } from "react";
import { Toast } from "antd-mobile";
import GroupBasicInfo from "./AddGroup/GroupBasicInfo";
import GroupRule from "./AddGroup/GroupRule";

import formatOut from "./AddGroup/formatOut";

import onHashChange from "Extended/onHashChange";
import { connect } from "react-redux";
import reqSchedule from "Action/reqSchedule";

@connect(state => ({
    schedules: state.getIn(["Attendance", localStorage.organizationId])
}))
@reqSchedule("schedules")
@onHashChange
export default class AttendanceGroupAdd extends Component {
    state = {
        shiftId: 0,
        deptList: [],
        userList: [],
        addressList: [],
        userId: "",
        radius: "100",
        workDayList: null,
        attendanceName: "",
        monShiftId: null,
        uesShiftId: null,
        wedShiftId: null,
        thurShiftId: null,
        friShiftId: null,
        satShiftId: null,
        sunShiftId: null,
        orgId: localStorage.organizationId
    };
    componentDidMount() {
        this.handleInitData(this.props);
    }
    componentDidUpdate() {
        this.handleInitData(this.props);
    }
    handleInitData = props => {
        let { schedules, match } = props;
        let { id } = match.params;
        if (!schedules || !id) {
            return;
        }
        let { shiftId } = this.state;
        if (shiftId) {
            return;
        }
        let nshiftId = schedules.getIn([0, "id"]);
        this.setState({
            shiftId: nshiftId
        });
    };
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
    handleNextStep = () => {
        let { attendanceName } = this.state;
        if (!attendanceName) {
            Toast.info("考勤组名称不能为空");
            return;
        }
        this.props.melocation.onPushQuery({
            step: 1
        });
    };
    handleSave = async () => {
        let data = formatOut(this.state);
        let res = await Request("attendanceGroup/add", {
            method: "post",
            data: data
        });
        if (res.success) {
            window.history.go(-2);
            Toast.info("新增考勤组成功");
        } else {
            Toast.info(res.message);
        }
    };
    render() {
        let { melocation } = this.props;
        let { step } = melocation.query;
        let props = {
            data: this.state,
            onChange: this.handleChange,
            onChangeDate: this.handleChangeDate,
            melocation: melocation
        };
        if (step == 1) {
            return <GroupRule {...props} onSave={this.handleSave} />;
        }
        return <GroupBasicInfo {...props} onSave={this.handleNextStep} title="下一步" />;
    }
}
