import React, { Component } from "react";
import { NavBar } from "antd-mobile";

import { contextConsumers } from "Libs/ContextRudex";

import { Link, withRouter } from "react-router-dom";

import asyncComponent from "Extended/asyncComponent";
import ErrorBoundary from "Extended/ErrorBoundary";
import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";

import reqTest from "Hoc/reqTest";
import styled from "styled-components";
import styles from "./Home.scss";

@contextConsumers(state => ({
    test: state.test
}))
class Home extends Component {
    // componentDidMount() {
    //     this.props.dispatch.callBack(reqTest, true);
    // }
    handleClick = () => {
        this.props.dispatch.setIn(["init", "redUrl"], "/login2");
    };
    render() {
        return (
            <LayoutView>
                <NavBar mode="light">首页</NavBar>
                <ContentView>
                    <div className={styles.scrollDiv}>11111111111111</div>
                    <ErrorBoundary>
                        <Test />
                    </ErrorBoundary>
                    <button onClick={this.handleClick}>tiaoz</button>
                    <Link to="/login">登录</Link>
                    <Link to="/">首页</Link>
                </ContentView>
            </LayoutView>
        );
    }
}

export default Home;

class Test extends Component {
    state = {
        throw: false
    };
    handleClick = () => {
        this.setState({
            throw: true
        });
    };
    render() {
        // if (this.state.throw) {
        //     throw new Error("YOLO");
        // }
        console.log("11111");
        return (
            <div>
                <button onClick={this.handleClick}> dianji </button>
            </div>
        );
    }
}
