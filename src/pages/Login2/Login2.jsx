import React, { Component } from "react";
import { NavBar, Icon, Result } from "antd-mobile";
import { Link, Redirect } from "react-router-dom";
import { contextConsumers } from "Libs/ContextRudex";

import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";

import styles from "./login.scss";

/**
 * 系统登录模块
 */

@contextConsumers(state => ({
    sessionKey: state.sessionKey
}))
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        let { sessionKey } = this.props;
        if (!sessionKey) {
            return;
        }
        this.props.dispatch.set({
            sessionKey: "sessionKey"
        });
    }
    login = () => {
        YSSJ.login();
    };
    render() {
        let { sessionKey, location } = this.props;
        if (sessionKey) {
            return <Redirect to={location.state || "/"} />;
        }
        return (
            <LayoutView>
                <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => window.history.back()}>
                    登录
                </NavBar>
                <ContentView>
                    前往登录
                    <Link to="/home">Home</Link>
                </ContentView>
            </LayoutView>
        );
    }
}
