/**
 * 审批
 */
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ApprovedList from "./ApprovedList";
import ListRibao from "./List/ListRibao";
import ListZhoubao from "./List/ListZhoubao";
import ListYuebao from "./List/ListYuebao";
import ListGrjh from "./List/ListGrjh";
import ListBmjh from "./List/ListBmjh";
import ApprovedDetail from "./ApprovedDetail";
import ApprovedSubmit from "./ApprovedSubmit";
import ApprovedIndex from "./ApprovedIndex";

const Organization = ({ location, match }) => (
    <Switch location={location}>
        <Route path={match.url + "/list/ribao"} component={ListRibao} />
        <Route path={match.url + "/list/zhoubao"} component={ListZhoubao} />
        <Route path={match.url + "/list/yuebao"} component={ListYuebao} />
        <Route path={match.url + "/list/grjh"} component={ListGrjh} />
        <Route path={match.url + "/list/bmjh"} component={ListBmjh} />
        <Route path={match.url + "/detail/:ApprovedId"} component={ApprovedDetail} />
        <Route path={match.url + "/:moduleId"} exact component={ApprovedSubmit} />
        <Route path={match.url} exact component={ApprovedIndex} />
    </Switch>
);

export default Organization;
