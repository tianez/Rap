/**
 * 通讯录
 */
import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "Extended/asyncComponent";
import AddressBookIndex from "./AddressBookIndex";
import AddressBookDetail from "./AddressBookDetail";

const AddressBookRouter = ({ location, match }) => (
    <Switch location={location}>
        <Route path={match.url + "/:userId"} exact component={AddressBookDetail} />
        <Route path={match.url} exact component={AddressBookIndex} />
    </Switch>
);

export default AddressBookRouter;
