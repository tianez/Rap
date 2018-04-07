import React, { Component } from "react";
import { NavBar } from "antd-mobile";

import { contextConsumers } from "Libs/ContextRudex";

import { Link, withRouter } from "react-router-dom";

import asyncComponent from "Extended/asyncComponent";
import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";

import reqTest from "Hoc/reqTest";

import styled from "styled-components";

import styles from "./Home.scss";

@contextConsumers(state => ({
    homeScrollTop: state.homeScrollTop || 0,
    test: state.test
}))
class Home extends Component {
    componentDidMount() {
        this.props.dispatch.callBack(reqTest, true);
    }
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
        console.log(this.props.test);
        return (
            <LayoutView>
                <NavBar mode="light">首页</NavBar>
                <ContentView>
                    <div className={styles.scrollDiv}>11111111111111</div>
                    <Link to="/login">登录</Link>
                </ContentView>
            </LayoutView>
        );
    }
}

export default Home;
