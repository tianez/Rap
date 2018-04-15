import React, { Component } from "react";
import { NavBar, TabBar } from "antd-mobile";

import { Link } from "react-router-dom";

import asyncComponent from "Extended/asyncComponent";
import ContentView from "Views/Layout/ContentView";
import Layout from "../Layout/Layout";

import reqTest from "Hoc/reqTest";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    init: state.init
}))
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            fullScreen: false
        };
    }
    render() {
        let { init, history } = this.props;
        return (
            <Layout title="首页" selectedTab="home">
                <ContentView>
                    首页
                    <input type="file" name="" id="" />
                </ContentView>
            </Layout>
        );
    }
}
