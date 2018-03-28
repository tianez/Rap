import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "Extended/privateRoute";
import asyncComponent from "Extended/asyncComponent";
import IsLogin from "./Nomatch/IsLogin";
import IsOrgs from "./Nomatch/IsOrgs";
const Home = asyncComponent(() => import("./Home/Home"), true);
// const Login = asyncComponent(() => import("./Login/Login"), true);

const InitRoutes = () => (
    <IsLogin>
        <IsOrgs>
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </HashRouter>
        </IsOrgs>
    </IsLogin>
);

export default InitRoutes;
