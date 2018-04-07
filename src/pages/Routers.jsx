import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "Extended/privateRoute";
import asyncComponent from "Extended/asyncComponent";
// import Home from "./Home/Home";
const Home = asyncComponent(() => import("./Home/Home"), true);
const Login = asyncComponent(() => import("./Login/Login"), true);

const InitRoutes = () => (
    <HashRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
        </Switch>
    </HashRouter>
);

export default InitRoutes;
