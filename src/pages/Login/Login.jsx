import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import asyncComponent from "Extended/asyncComponent";
const Header = asyncComponent(() => import("../Layout/Header"));
const Footer = asyncComponent(() => import("../Layout/Footer"));

// import styles from "./login.scss";

/**
 * 系统登录模块
 */

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header />
                <Footer />
                登录页面
            </div>
        );
    }
}
