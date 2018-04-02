import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "Extended/privateRoute";
import asyncComponent from "Extended/asyncComponent";
import Home from "./Home/Home";
const InitRoutes = () => (
    <HashRouter>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </HashRouter>
);

export default InitRoutes;
