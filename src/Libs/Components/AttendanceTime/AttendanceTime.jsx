/**
 * 选择班次
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { List, NavBar, Icon, Toast } from "antd-mobile";
const Item = List.Item;

import styled from "styled-components";

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import FooterBtn from "Components/Layout/FooterBtn";

import AttendanceAddTimeModal from "./AttendanceAddTimeModal";
import CheckboxItem from "./Components/CheckboxItem";

import reqScheduleAction from "Hoc/reqScheduleAction";
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    query: state.query,
    bcs: state.getIn(["schedules", localStorage.organizationId])
}))
export default class AttendanceTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectKey: props.selectKey
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            selectKey: nextProps.selectKey
        };
    }
    componentDidMount() {
        this.props.dispatch.callBack(reqScheduleAction);
    }
    handleCheck = selectKey => {
        this.setState({
            selectKey
        });
    };
    handleSave = () => {
        let { onSave } = this.props;
        let { selectKey } = this.state;
        onSave && onSave(selectKey);
    };
    render() {
        let { history, bcs } = this.props;
        let { selectKey } = this.state;
        return ReactDOM.createPortal(
            <Layout>
                <NavBar mode="light" icon={<Icon type="left" size="lg" />} onLeftClick={() => window.history.back()}>
                    班次设置
                </NavBar>
                <Content>
                    <List renderHeader={() => "从全局班次中选择你想用的班次"}>
                        <Item>
                            <AttendanceAddTimeModal id="addtime" history={history}>
                                <i style={{ color: "#8ac007" }} className={"iconfont icon-wuuiconxiangjifangda"} />{" "}
                                <span style={{ color: "#108ee9" }}>新增班次</span>
                            </AttendanceAddTimeModal>
                        </Item>
                        {bcs &&
                            bcs.map(d => (
                                <CheckboxItem
                                    onClick={this.handleCheck}
                                    value={d.id}
                                    key={d.id}
                                    checked={selectKey == d.id}
                                >
                                    <CheckView>
                                        <CheckNameView>{d.shiftName}</CheckNameView>
                                        <CheckEditView history={history} id={"editTime" + d.id} shiftId={d.id}>
                                            <i className="iconfont icon-bianji" />
                                        </CheckEditView>
                                    </CheckView>
                                </CheckboxItem>
                            ))}
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
    flex: 1;
    overflow: hidden;
`;

const CheckEditView = styled(AttendanceAddTimeModal)`
    min-width: 0.3rem;
    text-align: right;
`;
