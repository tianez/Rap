"use strict";

import "./style/app.less";
import React from "react";
import ReactDOM from "react-dom";
import Immutable from "seamless-immutable";
import Request from "Utils/axios";
import userAgent from "Utils/userAgent";

Object.assign(window, {
    Request,
    Immutable,
    $arr: Immutable([]),
    $obj: Immutable({}),
    userAgents: userAgent()
});

window.auths = ["dashboard", "organization", "user", "noticemanagement"];
localStorage.userName = "admin";
localStorage.userId = "57b2093a1e8945c79118b3ad5a952441";
localStorage.orgId = "2f48b9f151cf4f48b01030624cd7aac7";

/**
 * 初始化应用数据
 * 渲染程序
 */
import { Provider } from "Libs/ContextRudex";
import Routers from "./pages/Routers";

let initValue = {
    _site_id: 1,
    _site_name: "云上视界科技有限公司",
    _logoText: "云上视界科技有限公司OA系统",
    _logoSrc: null,
    _menus: {}
};

ReactDOM.render(
    <Provider value={initValue}>
        <Routers />
    </Provider>,
    document.getElementById("app")
);
