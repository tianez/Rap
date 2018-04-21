import React, { Component } from "react";
import { List, InputItem, WhiteSpace, Button, WingBlank, Toast } from "antd-mobile";
import { Link, Redirect } from "react-router-dom";

import ContentView from "Views/Layout/ContentView";
import BaseLayout from "../Layout/BaseLayout";

import styles from "./login.scss";
import QRCode from "qrcode";

/**
 * 系统登录模块
 */
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    authorization: state.authorization
}))
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                username: "",
                password: ""
            },
            loading: false
        };
    }
    componentDidMount() {
        let { authorization } = this.props;
        if (authorization) {
            return;
        }
        this.getUserInfo();
    }
    handleChange(name, value) {
        let { data } = this.state;
        data[name] = value;
        this.setState({
            data
        });
    }
    handleSubmit = async () => {
        let { data } = this.state;
        this.setState({ loading: true });
        let res = await Apicloud.post("user/login", data);
        if (res.success) {
            localStorage.authorization = res.data.id;
            localStorage.userId = res.data.userId;
            this.getUserInfo();
        } else {
            this.setState({ loading: false });
            Toast.info("登录失败");
            localStorage.removeItem("authorization");
            localStorage.removeItem("userId");
        }
    };
    getUserInfo = async () => {
        if (!localStorage.authorization || !localStorage.userId) {
            this.props.dispatch.set({ authorization: null, user: null });
            return;
        }
        let res = await Apicloud.get("user/" + localStorage.userId);
        this.setState({ loading: false });
        if (res.success) {
            this.props.dispatch.set({ authorization: localStorage.authorization, user: res.data });
        } else {
            this.props.dispatch.set({ authorization: null, user: null });
            localStorage.removeItem("authorization");
            localStorage.removeItem("userId");
        }
    };
    render() {
        let { authorization, location } = this.props;
        if (authorization && localStorage.authorization && localStorage.userId) {
            return <Redirect to={location.state || "/"} />;
        }
        let { data, loading } = this.state;
        return (
            <BaseLayout title={"登录"}>
                <ContentView>
                    <List renderHeader={() => "用户登录"}>
                        <InputItem
                            placeholder="请输入用户名"
                            value={data.username}
                            onChange={value => this.handleChange("username", value)}
                        />
                        <InputItem
                            type="password"
                            placeholder="请输入密码"
                            value={data.password}
                            onChange={value => this.handleChange("password", value)}
                        />
                    </List>
                    <WhiteSpace />
                    <WingBlank>
                        <Button type="primary" onClick={this.handleSubmit} loading={loading}>
                            登录
                        </Button>
                    </WingBlank>
                </ContentView>
            </BaseLayout>
        );
    }
}
