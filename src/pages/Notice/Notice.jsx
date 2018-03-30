import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { hashHistory } from "react-router";
import NoticePublic from "./NoticePublic";
import userAndDepart from "../UserList/userAndDepart";
import userNoticeList from "./userNoticeList";
import uad from "../UserList/userAndDepart";
import NoticeDetail from "./NoticeDetail";
import NoticeDetail2 from "./NoticeDetail2";
import NoticePublic2 from "./NoticePublic2";

const Notice = ({ location, match }) => (
    <Switch location={location} history={hashHistory}>
        <Route path={match.url + "/np"} exact component={NoticePublic} />
        <Route path={match.url + "/up"} component={userAndDepart} />
        <Route path={match.url + "/ua"} component={uad} />
        <Route path={match.url + "/nd/:noticeId"} component={NoticeDetail} />
        <Route path={match.url + "/public"} component={NoticePublic2} />
        <Route path={match.url + "/:id"} component={NoticeDetail2} />
        <Route path={match.url + "/"} exact component={userNoticeList} />
    </Switch>
);

export default Notice;
