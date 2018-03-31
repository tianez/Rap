import React, { Component } from "react";
import { contextConsumers } from "Libs/ContextRudex";
import { Toast, Result } from "antd-mobile";

import Nomatch from "./Nomatch";

/**
 * 系统登录模块
 */

@contextConsumers(state => ({
    sessionKey: state.sessionKey
}))
export default class IsLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        window.infoCallBack = this.infoCallBack;
    }
    componentDidMount() {
        if (isDev) {
            return this.getUser();
        }
        if (!YSSJ.isApp) {
            return;
        }
        this.infoCallBack();
    }
    getUser = () => {
        let user = {
            id: "57b2093a1e8945c79118b3ad5a952441",
            userName: "田恩仲"
        };
        this.initUser(user);
    };
    infoCallBack = () => {
        let user = YSSJ.user();
        this.initUser(user.data.user);
    };
    initUser = user => {
        if (user) {
            localStorage.userId = user.id;
            localStorage.userName = user.userName;
            this.props.dispatch.set({
                user,
                sessionKey: "sessionKey"
            });
        } else {
            localStorage.removeItem("userId");
            localStorage.removeItem("userName");
        }
    };
    login = () => {
        YSSJ.login();
    };
    render() {
        if (!YSSJ.isApp && !isDev) {
            return <NotInApp />;
        }
        let { sessionKey, children } = this.props;
        if (sessionKey) {
            return children;
        }
        let { loading } = this.state;
        return (
            <Nomatch title="登录" loading={loading}>
                <Result
                    img={<img src={"https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"} />}
                    title={"你还未登录"}
                    message={<div onClick={this.login}>前往登录</div>}
                />
            </Nomatch>
        );
    }
}

const NotInApp = () => (
    <Nomatch title="无法完成操作">
        <Result
            img={<img src={"https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"} />}
            title="无法完成操作"
            message="请在云上恩施系列App中打开该应用"
        />
    </Nomatch>
);
