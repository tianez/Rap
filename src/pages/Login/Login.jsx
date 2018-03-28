import React, { Component } from "react";
import { NavBar, Icon, Result } from "antd-mobile";
import { Redirect } from "react-router-dom";
import { contextConsumers } from "Libs/ContextRudex";

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
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
        console.log(sessionKey);

        if (sessionKey) {
            return <Redirect to={location.state || "/"} />;
        }
        return (
            <Layout>
                <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => window.history.back()}>
                    登录
                </NavBar>
                <Content>
                    <Result
                        className={styles.nologin}
                        img={
                            <img
                                src={"https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"}
                                className={styles.outImg}
                            />
                        }
                        title="你还未登录"
                        message={<div onClick={this.login}>前往登录</div>}
                    />
                </Content>
            </Layout>
        );
    }
}
