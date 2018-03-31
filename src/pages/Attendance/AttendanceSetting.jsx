import React, { Component } from "react";

import { NavBar, Icon, Button, List, WhiteSpace, Toast } from "antd-mobile";
const Item = List.Item;
import { Link } from "react-router-dom";

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";

import Footer from "./Components/Footer";

import styles from "./AttendanceSetting.scss";

export default class AttendanceSetting extends Component {
    constructor() {
        super();
        this.state = {
            attendanceGroupList: []
        };
    }
    async componentDidMount() {
        let res = await Request("attendanceGroup/list");
        if (res.success) {
            this.setState({
                attendanceGroupList: res.data.attendanceGroupList
            });
        } else {
            Toast.info(res.message);
        }
    }
    handleRed = () => {
        this.props.history.push("/attendance/addgroup");
    };
    render() {
        let { url, params } = this.props.match;
        let { attendanceGroupList } = this.state;
        return (
            <Layout>
                <NavBar mode="light" icon={<LeftIcon />}>
                    考勤设置
                </NavBar>
                <Content>
                    <WhiteSpace />
                    <List>
                        <Item onClick={this.handleRed}>
                            <div style={{ color: "#108ee9" }}>
                                <i className={"iconfont icon-wuuiconxiangjifangda"} /> <span>新增考勤组</span>
                            </div>
                        </Item>
                    </List>
                    {attendanceGroupList.map(d => {
                        return (
                            <div className={styles.attendance} key={d.id}>
                                <div className={styles.detail}>
                                    <div className={styles.attendanceName}>{d.attendanceName}</div>
                                    <div className={styles.shiftList}>{d.shiftList}</div>
                                    <div className={styles.attendanceAdd}>
                                        {d.addressList.map((add, index) => {
                                            return (
                                                <div key={index}>
                                                    <i className={"iconfont icon-kaoqinqiandao"} />
                                                    {add.name}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className={styles.act}>
                                    <Link
                                        to={{ pathname: "/attendance/grouprule/" + d.id, state: { ...d } }}
                                        className={styles.a}
                                    >
                                        修改规则
                                    </Link>
                                    <Link
                                        to={{ pathname: "/attendance/groupinfo/" + d.id, state: { ...d } }}
                                        className={styles.a}
                                    >
                                        修改成员及负责人
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </Content>
                <Footer curlink="setting" />
            </Layout>
        );
    }
}
