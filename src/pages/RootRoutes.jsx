import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import PrivateRoute from "Extended/privateRoute";
import asyncComponent from "Extended/asyncComponents";
const Login = asyncComponent(() => import("./Login/Login"), true);

import Home from "./Home/Home";
import News from "./News/News";
import Friend from "./Friend/Friend";
import Ucenter from "./Ucenter/Ucenter";
import Service from "./Service/Service";
const Qrcode = asyncComponent(() => import("./Qrcode/Qrcode"), true);
const NewDetail = asyncComponent(() => import("./News/Detail"), true);
const Setting = asyncComponent(() => import("./Setting/Setting"), true);
const Iframe = asyncComponent(() => import("./Iframe/Iframe"), true);
const FriendAdd = asyncComponent(() => import("./Friend/FriendAdd"), true);
const FriendDetail = asyncComponent(() => import("./Friend/FriendDetail"), true);
const ArticleDetail = asyncComponent(() => import("./Article/Detail"), true);
const Movies = asyncComponent(() => import("./Movies/Movies"), true);
const MoviesDetail = asyncComponent(() => import("./Movies/Detail"), true);
const Video = asyncComponent(() => import("./Video/Video"), true);

import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";
import Toptip from "./Layout/Toptip";

import { contextConsumers } from "Libs/ContextRudex";
const RootRoutes = ({ location, redUrl, onLine }) => {
    return (
        // <LayoutView>
        //     {/* {!onLine && <Toptip>网络连接不可用</Toptip>} */}
        //     <ContentView>
        <Switch location={location}>
            <Route path="/home" component={Home} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/movies/:id" exact component={MoviesDetail} />
            <Route path="/news" exact component={News} />
            <Route path="/news/:id" exact component={NewDetail} />
            <PrivateRoute path="/friend" exact component={Friend} />
            <PrivateRoute path="/friend/add" exact component={FriendAdd} />
            <PrivateRoute path="/friend/:id" exact component={FriendDetail} />
            <Route path="/login" component={Login} />
            <Route path="/ucenter" component={Ucenter} />
            <Route path="/service" component={Service} />
            <Route path="/qrcode" component={Qrcode} />
            <Route path="/setting" component={Setting} />
            <Route path="/iframe" component={Iframe} />
            <Route path="/p/:id" component={ArticleDetail} />
            <Route path="/video" component={Video} />
            {/* <Redirect path="/" exact to={redUrl} /> */}
            <Redirect path="*" to={redUrl} />
        </Switch>
        //     </ContentView>
        // </LayoutView>
    );
};

export default contextConsumers(state => ({
    onLine: state.onLine
}))(RootRoutes);
