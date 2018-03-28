import React, { Component } from "react";
import { NavBar, Icon, Result } from "antd-mobile";
import { Redirect } from "react-router-dom";
import { contextConsumers } from "Libs/ContextRudex";

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import styles from "./IsLogin.scss";

/**
 * 系统登录模块
 */

@contextConsumers(state => ({
    sessionKey: state.sessionKey
}))
export default class IsOrgs extends React.Component {
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
        let { sessionKey, children } = this.props;
        console.log(sessionKey);
        if (sessionKey) {
            return children;
        }
        return (
            <Layout>
                <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => window.history.back()}>
                    OA移动办公系统
                </NavBar>
                <Content>
                    <Result
                        className={styles.outApp}
                        img={
                            <img
                                src={"https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"}
                                className={styles.outImg}
                                alt=""
                            />
                        }
                        title={title}
                    />
                </Content>
            </Layout>
        );
    }
}
