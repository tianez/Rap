import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "Extended/privateRoute";
import asyncComponent from "Extended/asyncComponent";
import IsLogin from "./Nomatch/IsLogin";
import IsOrgs from "./Nomatch/IsOrgs";
import Home from "./Home/Home";
// const Home = asyncComponent(() => import("./Home/Home"), true);
const Notice = asyncComponent(() => import("./Notice/NoticeRouter"), true); //通知公告
const Organization = asyncComponent(() => import("./Organization/OrganizationRouter"), true); //组织架构
const AddressBook = asyncComponent(() => import("./AddressBook/AddressBookRouter"), true); //通讯录
const Attendance = asyncComponent(() => import("./Attendance/AttendanceRouter"), true); //考勤打卡
const Approved = asyncComponent(() => import("./Approved/Approved"), true); //审批

const Approvel = asyncComponent(() => import("./RelatedToMe/Approvel"), true); //我的审批
const Copys = asyncComponent(() => import("./RelatedToMe/Copys"), true); //我的抄送
const Originate = asyncComponent(() => import("./RelatedToMe/Originate"), true); //我的发起
const OnlineExam = asyncComponent(() => import("./OnlineExam/OnlineExam"), true); //在线考试

const InitRoutes = () => (
    <IsLogin>
        <IsOrgs>
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/notice" component={Notice} />
                    <Route path="/addressbook" component={AddressBook} />
                    <Route path="/organization" component={Organization} />
                    <Route path="/attendance" component={Attendance} />
                    <Route path="/approved" component={Approved} />
                    <Route path="/copys" component={Copys} />
                    <Route path="/approvel" component={Approvel} />
                    <Route path="/originates" component={Originate} />
                    <Route path="/onlineexam" component={OnlineExam} />
                </Switch>
            </HashRouter>
        </IsOrgs>
    </IsLogin>
);

export default InitRoutes;
