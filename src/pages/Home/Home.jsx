import React, { Component } from "react";
import { NavBar } from "antd-mobile";

import { contextConsumers } from "Libs/ContextRudex";

import asyncComponent from "Extended/asyncComponent";
import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";

import styles from "./Home.scss";

@contextConsumers(state => ({
    homeScrollTop: state.homeScrollTop || 0
}))
class Home extends Component {
    /**
     * 监听事件，返回组件滚动信息到父级组件
     */
    handleScroll = e => {
        let endTime = new Date();
        if (this.startTime && endTime - this.startTime < 50) {
            return;
        }
        this.startTime = endTime;
        this.props.dispatch.set({ homeScrollTop: e.target.scrollTop });
    };
    render() {
        return (
            <Layout>
                <NavBar mode="light">首页</NavBar>
                <Content>11111111111111</Content>
            </Layout>
        );
    }
}

export default Home;
