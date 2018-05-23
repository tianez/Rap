import React from "react";
import { contextConsumers } from "Libs/ContextRudex";
import { Route, Redirect, withRouter } from "react-router-dom";

/**
 * 路由控制组件，没有登陆的用户将跳转到登陆界面
 * @param {object} param0 参数
 */

const PrivateRoute = ({ component: Component, authorization, ...rest }) => {
    return authorization ? (
        <Route {...rest} component={Component} />
    ) : (
        <Redirect replace to={{ pathname: "/login", state: { ...rest.location } }} />
    );
};

export default contextConsumers(state => ({
    authorization: state.authorization
}))(PrivateRoute);
