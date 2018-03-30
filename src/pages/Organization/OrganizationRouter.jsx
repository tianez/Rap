import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import OrganizationIndex from "./OrganizationIndex";
// import MemberAdd from "./Member/MemberAdd";
// import MemberEdit from "./Member/MemberEdit";
// import Department from "./Department/Department";
// import DepartmentDetail from "./Department/DepartmentDetail";

const Organization = ({ location, match }) => (
    <Switch location={location}>
        {/* <Route path={match.url + '/member/add'} exact component={MemberAdd} />
        <Route path={match.url + '/member/:id'} exact component={MemberEdit} />
        <Route path={match.url + '/department/:id'} exact component={DepartmentDetail} />
        <Route path={match.url + '/department'} exact component={Department} /> */}
        <Route path={match.url} exact component={OrganizationIndex} />
    </Switch>
);

export default Organization;
