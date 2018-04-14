import React, { Component } from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import PrivateRoute from "Extended/privateRoute";
import asyncComponent from "Extended/asyncComponent";
// import Home from "./Home/Home";
const Home = asyncComponent(() => import("./Home/Home"), true);
const Login = asyncComponent(() => import("./Login/Login"), true);
const Login2 = asyncComponent(() => import("./Login2/Login2"), true);

const RootRoutes = ({ redUrl }) => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/login2" component={Login2} />
                <Redirect path="/" exact to={redUrl} />
            </Switch>
        </HashRouter>
    );
};

export default RootRoutes;
