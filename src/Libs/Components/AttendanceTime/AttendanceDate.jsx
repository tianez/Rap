/**
 * 选择班次
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { List, NavBar, Icon } from "antd-mobile";
const Item = List.Item;

import styled from "styled-components";

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import FooterBtn from "Components/Layout/FooterBtn";

import AttendanceTimeModal from "./AttendanceTimeModal";

import CheckboxItem from "./Components/CheckboxItem";

export default class AttendanceDate extends Component {
    static defaultProps = {
        defaultbc: 0
    };
    constructor(props) {
        super(props);
        let defaultbc = 0;
        let { monShiftId, uesShiftId, wedShiftId, thurShiftId, friShiftId, satShiftId, sunShiftId } = props.data;
        let bcs = [
            {
                id: "monShiftId",
                title: "每周一",
                bc: monShiftId || defaultbc
            },
            {
                id: "uesShiftId",
                title: "每周二",
                bc: uesShiftId || defaultbc
            },
            {
                id: "wedShiftId",
                title: "每周三",
                bc: wedShiftId || defaultbc
            },
            {
                id: "thurShiftId",
                title: "每周四",
                bc: thurShiftId || defaultbc
            },
            {
                id: "friShiftId",
                title: "每周五",
                bc: friShiftId || defaultbc
            },
            {
                id: "satShiftId",
                title: "每周六",
                bc: satShiftId || defaultbc
            },
            {
                id: "sunShiftId",
                title: "每周日",
                bc: sunShiftId || defaultbc
            }
        ];
        this.state = {
            cbcs: bcs
        };
    }
    /**
     * 选中日期
     */
    handleCheck = value => {
        let { cbcs } = this.state;
        let cbcs2 = [].concat(cbcs);
        let index = cbcs2.findIndex(d => {
            return d.id == value;
        });
        let curItem = { ...cbcs2[index] };
        if (curItem.bc && curItem.bc != "0") {
            curItem.bc = "0";
        } else {
            curItem.bc = this.props.defaultbc;
        }
        cbcs2[index] = curItem;
        this.setState({
            cbcs: cbcs2
        });
    };
    /**
     * 修改日期班次
     */
    handleSelectTime = (id, value) => {
        console.log(value);
        let { cbcs } = this.state;
        let cbcs2 = [].concat(cbcs);
        let index = cbcs2.findIndex(d => {
            return d.id == id;
        });
        let curItem = { ...cbcs2[index] };
        curItem.bc = value;
        cbcs2[index] = curItem;
        this.setState({
            cbcs: cbcs2
        });
        window.history.back();
    };
    handleSave = () => {
        let { onSave } = this.props;
        let { cbcs } = this.state;
        let workDayList = {};
        cbcs.map(cbc => {
            return (workDayList[cbc.id] = cbc.bc);
        });
        onSave && onSave(workDayList);
    };
    render() {
        let { history, schedules, data } = this.props;
        let { cbcs } = this.state;
        return ReactDOM.createPortal(
            <Layout>
                <NavBar mode="light" icon={<Icon type="left" size="lg" />} onLeftClick={() => window.history.back()}>
                    考勤日期
                </NavBar>
                <Content>
                    <List renderHeader={() => "你可以点击编辑图标对某一天进行单独修改"}>
                        {cbcs.map(d => {
                            let schedule = $obj;
                            if (schedules) {
                                schedule = schedules.find(sd => {
                                    return sd.id == d.bc;
                                });
                                schedule = schedule || $obj;
                            }
                            return (
                                <CheckboxItem
                                    onClick={this.handleCheck}
                                    value={d.id}
                                    key={d.id}
                                    checked={d.bc && d.bc != 0}
                                >
                                    <CheckView>
                                        <CheckNameView>{d.title}</CheckNameView>
                                        <CheckInfoView>{schedule.shiftName || "休息"}</CheckInfoView>
                                        <div onClick={e => e.stopPropagation()}>
                                            <CheckEditView
                                                history={history}
                                                id={"xzbc" + d.id}
                                                selectKey={d.bc}
                                                onSave={this.handleSelectTime.bind(this, d.id)}
                                            >
                                                <i className="iconfont icon-bianji" />
                                            </CheckEditView>
                                        </div>
                                    </CheckView>
                                </CheckboxItem>
                            );
                        })}
                    </List>
                </Content>
                <FooterBtn onClick={this.handleSave} />
            </Layout>,
            document.getElementById(rootDom)
        );
    }
}

const CheckView = styled.div`
    display: flex;
`;

const CheckNameView = styled.div`
    min-width: 0.6rem;
    width: 0.6rem;
    overflow: hidden;
`;

const CheckInfoView = styled.div`
    flex: 1;
    overflow: hidden;
    text-align: right;
    color: #666;
    font-size: 0.14rem;
    line-height: 0.28rem;
`;

const CheckEditView = styled(AttendanceTimeModal)`
    min-width: 0.3rem;
    text-align: right;
`;
