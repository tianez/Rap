import React, { Component } from "react";

import { NavBar, Icon, Button, Toast } from "antd-mobile";
import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";

import Footer from "./Components/Footer";
import Punch from "./Components/Punch";

import styles from "./AttendanceIndex.scss";

import formatDate from "Utils/formatDate";

import { AuthComponent } from "Action/Authorized";

import calculateLineDistance from "Utils/calculateLineDistance";

export default class AttendanceIndex extends Component {
    constructor(props) {
        super(props);
        window.global_handleUpdateData = this.global_handleUpdateData;
        this.state = {
            dates: {},
            data: [],
            addressList: [],
            radius: "160"
        };
    }
    componentDidMount() {
        this.handleGetData();
        this.handleUpdateTime();
        this.delay = setInterval(() => {
            this.handleUpdateTime();
        }, 1000);
    }
    componentWillUnmount() {
        Toast.hide();
        clearInterval(this.delay);
    }
    handleUpdateTime = () => {
        let dates = formatDate();
        this.setState({
            dates
        });
    };
    handleGetData = async () => {
        let dates = formatDate();
        let res = await Request("attendanceGroup/clockin/list", {
            params: {
                uid: localStorage.userId,
                clockinginDate: dates.ymd
            }
        });
        if (res.success) {
            let { clockinRecord } = res.data;
            if (!clockinRecord) {
                return;
            }
            this.setState({
                data: clockinRecord.clockinRecordList,
                addressList: clockinRecord.addressList,
                radius: clockinRecord.radius
            });
        } else {
            Toast.info(res.message);
        }
    };
    handleUpdateData = data => {
        let { dates } = this.state;
        if (dates.timestamp - Date.parse(data.prevClockTime) < 0) {
            return Toast.info("最早打卡时间为" + data.prevClockTime);
        }
        this.setState({
            curitem: data
        });
        Toast.info("定位中...", 0);
        YSSJ.getMapNew({ callback: "global_handleUpdateData" });
    };
    global_handleUpdateData = async lngt => {
        if (lngt.errorCode !== 0) {
            return Toast.info("定位失败，请重试");
        }
        let { addressList, radius, curitem } = this.state;
        let curaddress = {};
        let isrange = addressList.filter(addr => {
            let lcts = addr.location.split(",");
            let range = calculateLineDistance(
                { longitude: lngt.longitude, latitude: lngt.latitude },
                { longitude: lcts[0], latitude: lcts[1] }
            );
            return range < radius * 1;
        });
        if (isrange.length == 0) {
            return Toast.info("对不起，你还不在打卡有效范围内");
        }
        let da = {
            id: curitem.id,
            clockinginTime: curitem.clockinginTime,
            duty: curitem.duty,
            orgId: localStorage.organizationId,
            uid: localStorage.userId,
            clockinAddress: isrange[0].name,
            center: lngt.longitude + "," + lngt.latitude
        };
        let res = await Request("attendanceGroup/clockin", {
            method: "post",
            data: da
        });
        if (res.success) {
            Toast.info("打卡成功");
            this.handleGetData();
        } else {
            Toast.info(res.message);
        }
    };
    render() {
        let { dates, data } = this.state;
        let frists = data.filter(d => {
            return d.clockinTime == "" && dates.timestamp - Date.parse(d.lastClockTime) < 0;
            // return d.clockinTime == "";
        });
        let frist = frists[0];
        return (
            <Layout>
                <NavBar mode="light" icon={<LeftIcon />}>
                    考勤打卡
                </NavBar>
                <Content style={{ background: "#fff" }}>
                    <div className={styles.userinfo}>
                        <div className={styles.username}>{localStorage.userName}</div>
                        <div>{dates.ymd}</div>
                    </div>
                    <div className={styles.lists}>
                        <div className={styles.tp}>打卡记录时间和位置</div>
                        {data.map((d, index) => {
                            // let tit = index % 2 == 1 ? "下班时间" : "上班时间";
                            let tit = d.duty == "on" ? "上班时间" : "下班时间";
                            let isover = dates.timestamp - Date.parse(d.lastClockTime) > 0;
                            if (d.clockinTime == "" && isover) {
                                return (
                                    <div className={styles.daka} key={d.id}>
                                        <div className={styles.t1}>
                                            {tit}：{d.clockinginTime}
                                        </div>
                                        <div className={styles.t2}>
                                            <span className={styles.t4}>{d.clockinResultValue}</span>
                                        </div>
                                    </div>
                                );
                            } else if (d.clockinTime != "") {
                                return (
                                    <div className={styles.daka} key={d.id}>
                                        <div className={styles.t1}>
                                            {tit}：{d.clockinginTime}
                                        </div>
                                        <div className={styles.t2}>
                                            <div className={styles.t20}>{"打卡时间 " + d.clockinTime}</div>
                                            <span className={styles.t4}>{d.clockinResultValue}</span>
                                        </div>
                                        <div className={styles.t3}>
                                            <i className={"iconfont icon-weizhi2"} />
                                            {d.clockinAddress}
                                        </div>
                                        {/* {data.length == index + 1 && (
                                            <div className={styles.dakaup} onClick={this.handleUpdateDaka}>
                                                更新打卡
                                            </div>
                                        )} */}
                                    </div>
                                );
                            }
                            return null;
                        })}
                        {frist ? (
                            <Punch onClick={this.handleUpdateData} dates={dates} data={frist} />
                        ) : data.length == 0 ? (
                            <div className={styles.lastdaka}>今日没有打卡排班</div>
                        ) : (
                            <div className={styles.lastdaka}>今日打卡结束</div>
                        )}
                    </div>
                </Content>
                <AuthComponent auth="app.attendance">
                    <Footer curlink="attendance" />
                </AuthComponent>
            </Layout>
        );
    }
}
