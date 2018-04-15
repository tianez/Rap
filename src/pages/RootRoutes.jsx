import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import PrivateRoute from "Extended/privateRoute";
import asyncComponent from "Extended/asyncComponent";
const Login = asyncComponent(() => import("./Login/Login"), true);

import Home from "./Home/Home";
import News from "./News/News";
import Friend from "./Friend/Friend";
import Ucenter from "./Ucenter/Ucenter";

const RootRoutes = ({ location, redUrl }) => {
    return (
        <Switch location={location}>
            <Route path="/home" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/friend" component={Friend} />
            <Route path="/login" component={Login} />
            <Route path="/ucenter" component={Ucenter} />
            <Redirect path="/" exact to={redUrl} />
        </Switch>
    );
};

export default RootRoutes;
