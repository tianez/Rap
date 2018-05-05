import React, { Component } from "react";
import { NavBar, TabBar } from "antd-mobile";

import { Link } from "react-router-dom";

import asyncComponent from "Extended/asyncComponent";
import ContentView from "Views/Layout/ContentView";
import Loading from "Components/Layout/Loading";

import Layout from "../Layout/Layout";

import reqTest from "Hoc/reqTest";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Switch, Redirect, Route } from "react-router-dom";
import dayjs from "dayjs";

import getWeekOfYear from "Utils/getWeekOfYear";

import { contextConsumers } from "Libs/ContextRudex";
import GetData from "Hoc/GetData";
@contextConsumers(state => ({
    init: state.init
}))
@GetData
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentDidMount() {
        let weeks = getWeekOfYear();
        console.log(weeks);
        this.getData();
    }
    getData = async () => {
        console.time("testForEach");
        let dbData = await db.news.toArray();
        if (dbData) {
            this.setState({
                items: dbData
            });
        }
        let filter = {
            where: {},
            skip: 0,
            limit: 20,
            fields: ["id", "title", "content", "createdAt"]
        };
        // this.props.getData("article", {
        //     params: {
        //         filter
        //     }
        // });
        let res = await Apicloud("article", {
            params: {
                filter
            }
        });
        console.timeEnd("testForEach");
        db.news.bulkPut(res.data);
        console.log(res.data);

        this.setState({
            items: res.data
        });
    };
    render() {
        let { init, data, loadState } = this.props;
        const { items } = this.state;
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
                    <Loading
                        {...loadState}
                        loadingTitle={"刷新中"}
                        errorAction={<div onClick={this.getData}>出错了，点击重试！</div>}
                    />
                    {/* <Loading {...loadState} errorAction={<div onClick={this.getData}>出错了，点击重试！</div>}> */}
                    {items.map(d => {
                        return (
                            <Link to={`/p/${d.id}`} key={d.id} className="listitem">
                                {d.titleImg && (
                                    <div className="img" style={{ backgroundImage: `url(${d.titleImg})` }} />
                                )}
                                <div className="detail">
                                    <div className="title">{d.title}</div>
                                    <div className="info">{dayjs(d.createdAt).format("YYYY-MM-DD HH:mm:ss")}</div>
                                </div>
                            </Link>
                        );
                    })}
                    {/* </Loading> */}
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
