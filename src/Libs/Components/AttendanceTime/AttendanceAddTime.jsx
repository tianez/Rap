/**
 * 新增编辑班次
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { List, NavBar, Icon, Radio, InputItem, WhiteSpace, Picker, Toast } from "antd-mobile";
const Item = List.Item;
const RadioItem = Radio.RadioItem;

import styled from "styled-components";

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import FooterBtn from "Components/Layout/FooterBtn";

import BcNum from "./AttendanceAddTime/BcNum";

const hour = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23"
];
const nminute = [
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59"
];
const minute = [].concat(hour, nminute);
const hours = hour.map(d => {
    return {
        label: d,
        value: d
    };
});

const minutes = minute.map(d => {
    return {
        label: d,
        value: d
    };
});

const times = [
    [
        {
            shiftOrder: 1,
            onDutyTime: "09:30:00",
            onDutyClockStart: 30,
            offDutyTime: "18:00:00",
            offDutyClockEnd: 30
        }
    ],
    [
        {
            shiftOrder: 1,
            onDutyTime: "08:30:00",
            onDutyClockStart: 30,
            offDutyTime: "12:00:00",
            offDutyClockEnd: 30
        },
        {
            shiftOrder: 2,
            onDutyTime: "14:30:00",
            onDutyClockStart: 30,
            offDutyTime: "17:30:00",
            offDutyClockEnd: 30
        }
    ],
    [
        {
            shiftOrder: 1,
            onDutyTime: "08:30:00",
            onDutyClockStart: 30,
            offDutyTime: "12:00:00",
            offDutyClockEnd: 30
        },
        {
            shiftOrder: 2,
            onDutyTime: "14:00:00",
            onDutyClockStart: 30,
            offDutyTime: "17:00:00",
            offDutyClockEnd: 30
        },
        {
            shiftOrder: 3,
            onDutyTime: "19:00:00",
            onDutyClockStart: 30,
            offDutyTime: "21:00:00",
            offDutyClockEnd: 30
        }
    ]
];

const fristTime = {
    time: [-1, 0],
    ptime: 0,
    type: 1
};

const lastTime = {
    time: [24, 59],
    ptime: 0,
    type: 1
};

export default class AttendanceAddTime extends Component {
    state = {
        orgId: localStorage.organizationId,
        shiftDetalsBeanList: [],
        onOffNum: 1,
        isCheckTime: 0,
        isUncheckOff: 0,
        admitLateTimes: 30,
        seriousLateTimes: 60,
        neglectLateTimes: 180,
        lateLateFlag: 0,
        shiftLateRuleBeanList: [
            {
                ruleName: "222",
                leaveHours: 1.5,
                comeHours: 2.5
            }
        ]
    };
    componentDidMount() {
        this.setState({
            shiftDetalsBeanList: times[0]
        });
        let { shiftId } = this.props;
        if (shiftId) {
            this.reqBcData(shiftId);
        }
    }
    reqBcData = async shiftId => {
        let res = await Request("shift/getOneShift", {
            params: {
                shiftId
            }
        });
        if (res.success) {
            this.setState(res.data[0]);
        }
    };

    handleChangeTitle = shiftName => {
        this.setState({
            shiftName
        });
    };
    handleChangeBcNum = onOffNum => {
        let shiftDetalsBeanList = times[onOffNum * 1 - 1] || [];
        this.setState({
            shiftDetalsBeanList,
            onOffNum
        });
    };
    handleChangeBctime = (tindex, onDutyTime, value) => {
        let { shiftDetalsBeanList } = this.state;
        value = value.join(":") + ":00";
        shiftDetalsBeanList[tindex][onDutyTime] = value;
        this.setState({
            shiftDetalsBeanList
        });
    };
    handleSave = () => {
        let { shiftId } = this.props;
        if (shiftId) {
            this.handleUpdateData();
        } else {
            this.handleAddData();
        }
    };
    handleAddData = async () => {
        Toast.info("数据提交中", 0);
        let data = this.state;
        let res = await Request("shift/addShift", {
            method: "post",
            data: data
        });
        if (res.success) {
            Toast.info("新增班次成功");
            this.handleGetNewData();
        } else {
            Toast.info(res.message);
        }
    };
    handleUpdateData = async () => {
        Toast.info("数据保存中", 0);
        let data = this.state;
        let res = await Request("shift/updateShift", {
            method: "post",
            data: data
        });
        if (res.success) {
            Toast.info("班次保存成功");
            store.dispatch("Attendance/updateIn", [
                [localStorage.organizationId],
                schedules => {
                    schedules = schedules.map(schedule => {
                        if (schedule.get("id") != data.id) {
                            return schedule;
                        }
                        return fromJS(data);
                    });
                    return schedules;
                }
            ]);
            window.history.back();
        } else {
            Toast.info(res.message);
        }
    };
    handleDeleteTime = () => {
        let { onDelete } = this.props;
        let data = this.state;
        onDelete && onDelete(data);
    };
    handleGetNewData = async () => {
        let orgId = localStorage.organizationId;
        let res = await Request("shift/getShiftList", {
            params: {
                orgId
            }
        });
        if (res.success) {
            store.dispatch("Attendance/setIn", [[orgId], res.data.list]);
        }
        window.history.back();
    };
    render() {
        let { shiftId } = this.props;
        let { shiftDetalsBeanList, onOffNum, shiftName } = this.state;
        // const rightContent = shiftId ? <span onClick={this.handleDeleteTime}>删除</span> : null;
        return ReactDOM.createPortal(
            <Layout>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" size="lg" />}
                    onLeftClick={() => window.history.back()}
                    // rightContent={rightContent}
                >
                    {shiftId ? "编辑班次" : "新增班次"}
                </NavBar>
                <Content>
                    <WhiteSpace />
                    <InputItem placeholder="班次名称" value={shiftName} onChange={this.handleChangeTitle}>
                        班次名称
                    </InputItem>
                    <BcNum onChange={this.handleChangeBcNum} bcnum={onOffNum} />
                    {shiftDetalsBeanList.map((d, tindex) => {
                        let prev = "00:00:00";
                        let next = "24:59:00";
                        if (tindex != 0) {
                            prev = shiftDetalsBeanList[tindex - 1].offDutyTime;
                        }
                        if (tindex != shiftDetalsBeanList.length - 1) {
                            next = shiftDetalsBeanList[tindex + 1].onDutyTime;
                        }
                        return (
                            <List key={tindex} renderHeader={() => "第" + (tindex + 1) + "次上下班时间"}>
                                <PickerTime
                                    title={"上班"}
                                    value={d.onDutyTime}
                                    prev={prev}
                                    next={d.offDutyTime}
                                    onChange={this.handleChangeBctime.bind(null, tindex, "onDutyTime")}
                                />
                                <PickerTime
                                    title={"下班"}
                                    value={d.offDutyTime}
                                    prev={d.onDutyTime}
                                    next={next}
                                    onChange={this.handleChangeBctime.bind(null, tindex, "offDutyTime")}
                                />
                            </List>
                        );
                        let prevtime = time[tindex - 1] || fristTime;
                        let endtime = time[tindex + 1] || lastTime;
                        let hourstart = prevtime.time[0] * 1 + 1;
                        let hourend = endtime.time[0] * 1;
                    })}
                    <WhiteSpace />
                </Content>
                <FooterBtn onClick={this.handleSave} />
            </Layout>,
            document.getElementById("app")
        );
    }
}

const PickerTime = ({ title, onChange, value, prev, next }) => {
    value = value.split(":", 2);
    prev = prev.split(":", 2);
    next = next.split(":", 2);
    let chours = hours.slice(prev[0] * 1 + 1, next[0] * 1);
    let seasons = [chours, minutes];
    return (
        <Picker
            data={seasons}
            title="选择时间"
            cascade={false}
            extra="请选择(可选)"
            value={value}
            format={labels => labels.join(":")}
            onChange={v => onChange(v)}
        >
            <List.Item arrow="horizontal">{title}</List.Item>
        </Picker>
    );
};
