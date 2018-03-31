/**
 * 组织架构
 */
import React from "react";
import { Route, Switch } from "react-router-dom";

import OrganizationIndex from "./OrganizationIndex";
import MemberAdd from "./Member/MemberAdd";
import MemberEdit from "./Member/MemberEdit";
import Department from "./Department/Department";
import DepartmentEdit from "./Department/DepartmentEdit";

const Organization = ({ location, match }) => (
    <Switch location={location}>
        <Route path={match.url + "/member/add"} exact component={MemberAdd} />
        <Route path={match.url + "/member/:id"} exact component={MemberEdit} />
        <Route path={match.url + "/department/:id"} exact component={DepartmentEdit} />
        <Route path={match.url + "/department"} exact component={Department} />
        <Route path={match.url} exact component={OrganizationIndex} />
    </Switch>
);

export default Organization;
