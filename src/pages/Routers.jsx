import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from "Extended/privateRoute";
import asyncComponent from "Extended/asyncComponent";
import IsLogin from "./Nomatch/IsLogin";
import IsOrgs from "./Nomatch/IsOrgs";
import Home from "./Home/Home";
// const Home = asyncComponent(() => import("./Home/Home"), true);
const AddressBook = asyncComponent(() => import("./AddressBook/AddressBookRouter"), true); //通讯录

const InitRoutes = () => (
    <IsLogin>
        <IsOrgs>
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/addressbook" component={AddressBook} />
                </Switch>
            </HashRouter>
        </IsOrgs>
    </IsLogin>
);

export default InitRoutes;
