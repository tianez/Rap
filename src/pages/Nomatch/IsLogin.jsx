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
    state = {
        loading: true
    };
    componentDidMount() {
        // if (!YSSJ.isApp) {
        //     return;
        // }
        // let { sessionKey } = this.props;
        // Toast.loading("获取登录信息中...", 0);
        // if (!sessionKey) {
        //     return;
        // }
        // this.setState({
        //     loading: true
        // });
        Toast.hide();
        this.props.dispatch.set({
            sessionKey: "sessionKey"
        });
    }
    login = () => {
        YSSJ.login();
    };
    render() {
        // if (!YSSJ.isApp) {
        //     return <NotInApp />;
        // }
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
