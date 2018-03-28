import React, { Component } from "react";
import { contextConsumers } from "Libs/ContextRudex";
import Nomatch from "./Nomatch";

/**
 * 系统登录模块
 */

@contextConsumers(state => ({
    sessionKey: state.sessionKey
}))
export default class IsLogin extends React.Component {
    componentDidMount() {
        // let { sessionKey } = this.props;
        // if (!sessionKey) {
        //     return;
        // }
        this.props.dispatch.set({
            sessionKey: "sessionKey"
        });
    }
    login = () => {
        YSSJ.login();
    };
    render() {
        let { sessionKey, children } = this.props;
        if (sessionKey) {
            return children;
        }
        return (
            <Nomatch title="你还未登录">
                <div onClick={this.login}>前往登录</div>
            </Nomatch>
        );
    }
}
