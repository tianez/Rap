/**
 * 考勤打卡
 */
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AttendanceIndex from "./AttendanceIndex";
import AttendanceAction from "./AttendanceAction";
import AttendanceSetting from "./AttendanceSetting";
import AttendanceGroupAdd from "./AttendanceGroupAdd";
import AttendanceGroupEditInfo from "./AttendanceGroupEditInfo";
import AttendanceGroupEditRule from "./AttendanceGroupEditRule";

const AttendanceRouter = ({ location, match }) => (
    <Switch location={location}>
        <Route path={match.url + "/setting"} component={AttendanceSetting} />
        <Route path={match.url + "/addgroup"} component={AttendanceGroupAdd} />
        <Route path={match.url + "/grouprule/:id"} component={AttendanceGroupEditRule} />
        <Route path={match.url + "/groupinfo/:id"} component={AttendanceGroupEditInfo} />
        <Route path={match.url} exact component={AttendanceIndex} />
    </Switch>
);

export default AttendanceRouter;
