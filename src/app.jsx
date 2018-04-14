"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Immutable from "seamless-immutable";
import Request from "Utils/axios";
import userAgent from "Utils/userAgent";
import "./style/app.less";

Object.assign(window, {
    Request,
    Immutable,
    $arr: Immutable([]),
    $obj: Immutable({}),
    userAgents: userAgent(),
    rootDom: "app",
    auths: [],
    isDev: true
});

/**
 * 初始化应用数据
 * 渲染程序
 */
import { Provider } from "Libs/ContextRudex";
import InitRoutes from "./InitRoutes";
localStorage.organizationId = "2f48b9f151cf4f48b01030624cd7aac7";
let initValue = {
    _site_id: 1,
    _site_name: "云上视界科技有限公司",
    _logoText: "云上视界科技有限公司OA系统",
    _logoSrc: null,
    _menus: {},
    init: {
        _v: 0
    }
};

ReactDOM.render(
    <Provider value={initValue}>
        <HashRouter>
            <Route component={InitRoutes} />
        </HashRouter>
    </Provider>,
    document.getElementById("app")
);
