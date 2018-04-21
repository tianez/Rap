import React, { Component } from "react";
import { NavBar, TabBar } from "antd-mobile";

import { Link } from "react-router-dom";

import asyncComponent from "Extended/asyncComponent";
import ContentView from "Views/Layout/ContentView";
import Layout from "../Layout/Layout";

import reqTest from "Hoc/reqTest";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Switch, Redirect, Route } from "react-router-dom";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    init: state.init
}))
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            fullScreen: false,
            show: false,
            items: []
        };
    }
    async componentDidMount() {
        let filter = {
            where: {},
            skip: 0,
            limit: 20
        };
        let res = await Apicloud("article", {
            params: {
                filter
            }
        });
        this.setState({
            items: res.data
        });
    }
    render() {
        let { init, history, location, match } = this.props;
        const { items } = this.state;
        console.log(items);

        return (
            <Layout
                title="首页"
                selectedTab="home"
                rightContent={
                    <Link to="/news" style={{ color: "#108ee9" }}>
                        写文章
                    </Link>
                }
            >
                <ContentView style={{ height: "100%", background: "#fff" }}>
                    {items.map(d => {
                        return (
                            <Link to={`${match.url}/${d.id}`} key={d.id} className="listitem">
                                {d.titleImg && (
                                    <div className="img" style={{ backgroundImage: `url(${d.titleImg})` }} />
                                )}
                                <div className="detail">
                                    <div className="title">{d.title}</div>
                                    <div className="info">{d.createdAt}</div>
                                </div>
                            </Link>
                        );
                    })}
                </ContentView>
            </Layout>
        );
    }
}

const Home1 = () => {
    return <div>Home1</div>;
};

const Home2 = () => {
    return <div>Home2</div>;
};
