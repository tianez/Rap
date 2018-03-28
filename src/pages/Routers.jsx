import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

// import LayoutView from "Views/Layout/LayoutView";
// import MainView from "Views/Layout/MainView";
// import ContentView from "Views/Layout/ContentView";

import PrivateRoute from "Extended/privateRoute";
import asyncComponent from "Extended/asyncComponent";

const Home = asyncComponent(() => import("./Home/Home"), true);
const Login = asyncComponent(() => import("./Login/Login"), true);

const Routers = ({ location }) => (
    <Switch location={location}>
        <Route path="/" exact component={Home} />
        {/* <Route path="*" component={Nomatch} /> */}
    </Switch>
);

const InitRoutes = () => (
    <HashRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route component={Routers} />
            {/* <PrivateRoute component={Routers} /> */}
        </Switch>
    </HashRouter>
);

export default InitRoutes;
