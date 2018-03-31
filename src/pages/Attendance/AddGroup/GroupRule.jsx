import React, { Component } from "react";
import { NavBar, Icon, Button, WhiteSpace, List, Toast } from "antd-mobile";
const Item = List.Item;
import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";

import AmapModal from "Components/Amap/AmapModal";
import AttendanceTimeModal from "Components/AttendanceTime/AttendanceTimeModal";
import AttendanceDateModal from "Components/AttendanceTime/AttendanceDateModal";

import FooterBtn from "Components/Layout/FooterBtn";

const CloseView = styled.div`
    width: 0.2rem;
    height: 0.2rem;
    position: absolute;
    right: 0.15rem;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    line-height: 0.2rem;
    font-size: 0.12rem;
    background: rgba(0, 0, 0, 0.25);
    color: #fff;
    border-radius: 1rem;
`;

import styled from "styled-components";

import reqScheduleAction from "Hoc/reqScheduleAction";
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    query: state.query,
    schedules: state.getIn(["schedules", localStorage.organizationId])
}))
export default class GroupRule extends Component {
    state = {};
    static getDerivedStateFromProps(nextProps, prevState) {
        let { data, schedules, onChange } = nextProps;
        if (!data.shiftId && schedules && schedules.getIn([0, "id"])) {
            onChange && onChange("shiftId", schedules.getIn([0, "id"]));
        }
        return null;
    }
    componentDidMount() {
        this.props.dispatch.callBack(reqScheduleAction);
    }
    /**
     * 改变考勤时间
     */
    handleChangeTime = shiftId => {
        let { onChange } = this.props;
        onChange && onChange("shiftId", shiftId);
        window.history.back();
    };
    /**
     * 选择保存考勤地点
     */
    handleRightClick = address => {
        let { data, onChange } = this.props;
        let { addressList } = data;
        let ishave = addressList.findIndex(d => {
            return d.id == address.id;
        });
        if (ishave !== -1) {
            Toast.info("该地点已存在");
            return;
        }
        addressList = addressList.concat(address);
        onChange && onChange("addressList", addressList);
        window.history.back();
    };
    /**
     * 删除考勤地点
     */
    handleDelAois = e => {
        let { data, onChange } = this.props;
        console.log(data);
        let addressList = data.addressList.filter(d => {
            return d.id != e.target.dataset.id;
        });
        onChange && onChange("addressList", addressList);
    };
    /**
     * 设置办公考勤地点半径范围
     */
    handleChangeRadius = e => {
        let { onChange } = this.props;
        onChange && onChange("radius", e.target.value);
    };
    render() {
        let { history, data, schedules, onChangeDate, onSave } = this.props;
        let { addressList, radius, shiftId } = data;
        let { monShiftId, uesShiftId, wedShiftId, thurShiftId, friShiftId, satShiftId, sunShiftId } = data;
        let schedule = $obj;
        if (schedules) {
            schedule = schedules.find(d => {
                return d.id == shiftId;
            });
            schedule = schedule || schedules[0] || $obj;
        }
        let workDayList = [monShiftId, uesShiftId, wedShiftId, thurShiftId, friShiftId, satShiftId, sunShiftId];
        let selectBcs = workDayList
            ? workDayList.filter(d => {
                  return d && d != 0;
              })
            : [];
        return (
            <Layout>
                <NavBar mode="light" icon={<LeftIcon />}>
                    考勤规则
                </NavBar>
                <Content>
                    <List renderHeader={() => "设置考勤时间和日期"}>
                        <AttendanceTimeModal
                            id="kqsj"
                            history={history}
                            selectKey={shiftId}
                            onSave={this.handleChangeTime}
                        >
                            <Item arrow="horizontal" extra={schedule.shiftName}>
                                考勤时间
                            </Item>
                        </AttendanceTimeModal>
                        <AttendanceDateModal
                            id="kqrq"
                            history={history}
                            schedules={schedules}
                            bcs={workDayList}
                            defaultbc={shiftId}
                            data={data}
                            onSave={onChangeDate}
                        >
                            <Item arrow="horizontal" extra={"每周" + selectBcs.length + "天"}>
                                考勤日期
                            </Item>
                        </AttendanceDateModal>
                    </List>
                    <List renderHeader={() => "设置办公考勤地点"}>
                        <Item
                            arrow="horizontal"
                            extra={
                                <select value={radius} onChange={this.handleChangeRadius}>
                                    <option value={100}>100米</option>
                                    <option value={150}>150米</option>
                                    <option value={200}>200米</option>
                                    <option value={250}>250米</option>
                                    <option value={300}>300米</option>
                                    <option value={500}>500米</option>
                                </select>
                            }
                        >
                            打卡有效范围
                        </Item>
                        {addressList.map(d => {
                            return (
                                <Item key={d.id} multipleLine>
                                    <div>{d.name}</div>
                                    <CloseView data-id={d.id} onClick={this.handleDelAois}>
                                        ×
                                    </CloseView>
                                </Item>
                            );
                        })}
                        <Item onClick={this.handleRed}>
                            <AmapModal id="dkdd" history={history} onRightClick={this.handleRightClick}>
                                <i style={{ color: "#8ac007" }} className={"iconfont icon-wuuiconxiangjifangda"} />{" "}
                                <span style={{ color: "#108ee9" }}>添加办公地点</span>
                            </AmapModal>
                        </Item>
                    </List>
                    <WhiteSpace />
                </Content>
                <FooterBtn onClick={onSave} />
            </Layout>
        );
    }
}
