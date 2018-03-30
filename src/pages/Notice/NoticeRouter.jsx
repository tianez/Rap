import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import NoticeApprovedDetail from "./NoticeApprovedDetail";
import NoticePublic from "./NoticePublic";
import NoticeDetail from "./NoticeDetail";
import NoticeList from "./NoticeList";

const Notice = ({ location, match }) => (
    <Switch location={location}>
        {/* <Route path={match.url + "/approved/:id"} component={NoticeApprovedDetail} /> */}
        <Route path={match.url + "/public"} component={NoticePublic} />
        <Route path={match.url + "/:id"} component={NoticeDetail} />
        <Route path={match.url + "/"} exact component={NoticeList} />
    </Switch>
);

export default Notice;
