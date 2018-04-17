import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import PrivateRoute from "Extended/privateRoute";
import asyncComponent from "Extended/asyncComponent";
const Login = asyncComponent(() => import("./Login/Login"), true);

import Home from "./Home/Home";
import News from "./News/News";
import Friend from "./Friend/Friend";
import Ucenter from "./Ucenter/Ucenter";
const Qrcode = asyncComponent(() => import("./Qrcode/Qrcode"), true);
const Setting = asyncComponent(() => import("./Setting/Setting"), true);
const Iframe = asyncComponent(() => import("./Iframe/Iframe"), true);

import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";
import Toptip from "./Layout/Toptip";

import { contextConsumers } from "Libs/ContextRudex";
const RootRoutes = ({ location, redUrl, onLine }) => {
    return (
        <LayoutView>
            {!onLine && <Toptip>网络连接不可用</Toptip>}
            <ContentView>
                <Switch location={location}>
                    <Route path="/home" component={Home} />
                    <Route path="/news" component={News} />
                    <Route path="/friend" component={Friend} />
                    <Route path="/login" component={Login} />
                    <Route path="/ucenter" component={Ucenter} />
                    <Route path="/qrcode" component={Qrcode} />
                    <Route path="/setting" component={Setting} />
                    <Route path="/iframe" component={Iframe} />
                    <Redirect path="/" exact to={redUrl} />
                </Switch>
            </ContentView>
        </LayoutView>
    );
};

export default contextConsumers(state => ({
    onLine: state.onLine
}))(RootRoutes);
