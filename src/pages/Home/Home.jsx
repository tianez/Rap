import React, { Component } from "react";
import { NavBar, TabBar } from "antd-mobile";
import { Link } from "react-router-dom";

import asyncComponent from "Extended/asyncComponent";
import ContentView from "Views/Layout/ContentView";
import LazyWarper from "Components/Layout/LazyWarper";
import Loading from "Components/Layout/Loading";

import Layout from "../Layout/Layout";
import delay from "Utils/delay";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import dayjs from "dayjs";
import getWeekOfYear from "Utils/getWeekOfYear";
// import { contextConsumers } from "Libs/ContextRudex";
// @contextConsumers(state => ({
//     init: state.init
// }))
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            page: 0,
            pageSize: 10,
            isCache: false,
            isInit: true,
            hasMore: true,
            loadState: {
                loading: false,
                error: false,
                errorMsg: ""
            }
        };
    }
    async componentDidMount() {
        // let weeks = getWeekOfYear();
        // console.log(weeks);
        let { pageSize } = this.state;
        let dbData = await db.news
            .reverse()
            .limit(pageSize)
            .toArray();
        if (dbData.length > 0) {
            this.setState({
                data: dbData,
                isCache: true
            });
        }
        this.getInitData();
    }
    getInitData = () => {
        this.getData();
    };
    getMoreData = async () => {
        let { data, hasMore } = this.state;
        if (!hasMore) {
            return;
        }
        this.getData(data, false, 300);
    };
    getData = async (data = [], isInit = true, delaytime = 0) => {
        if (this.loading) {
            return;
        }
        this.loading = true;
        this.delayStart = Date.now();
        this.setState({
            isInit,
            loadState: {
                loading: true,
                error: false,
                errorMsg: ""
            }
        });
        let { page, pageSize } = this.state;
        let filter = {
            where: {},
            skip: page * pageSize,
            limit: pageSize
            // fields: ["id", "title", "content", "createdAt"]
        };
        let res = await Apicloud("article", {
            params: {
                filter
            }
        });
        let delayend = this.delayStart + delaytime - Date.now();
        if (delayend > 0) {
            await delay(delayend);
        }
        this.loading = false;
        if (res.success) {
            db.news.bulkPut(res.data);
            page++;
            this.setState({
                data: data.concat(res.data),
                hasMore: res.data.length == pageSize,
                page,
                loadState: {
                    loading: false,
                    error: false,
                    errorMsg: ""
                }
            });
        } else {
            this.setState({
                loadState: {
                    loading: false,
                    error: true,
                    errorMsg: res.message
                }
            });
        }
    };
    handleScroll = viewport => {
        let { loadState } = this.state;
        if (loadState.error) {
            return;
        }
        let { top } = this.load.getBoundingClientRect();
        let height = window.screen.height;
        if (top < height + 100) {
            this.getMoreData();
        }
    };
    render() {
        const { data, loadState, isCache, isInit } = this.state;
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
                    <LazyWarper onScroll={this.handleScroll}>
                        {isInit && (
                            <Loading
                                {...loadState}
                                reflush={isCache}
                                loadingTitle={"数据加载中"}
                                errorAction={<div onClick={this.getInitData}>{loadState.errorMsg}，点击重试！</div>}
                            />
                        )}
                        {data.map(d => {
                            return (
                                <Link to={`/p/${d.id}`} key={d.id} className="listitem">
                                    {d.thumb && <div className="img" style={{ backgroundImage: `url(${d.thumb})` }} />}
                                    <div className="detail">
                                        <div className="title">{d.title}</div>
                                        <div className="info">{dayjs(d.createdAt).format("YYYY-MM-DD HH:mm:ss")}</div>
                                    </div>
                                </Link>
                            );
                        })}
                        <div ref={ele => (this.load = ele)} />
                        {!isInit && (
                            <Loading
                                {...loadState}
                                loadingTitle={"更多数据加载中"}
                                errorAction={<div onClick={this.getMoreData}>{loadState.errorMsg}，点击重试！</div>}
                            />
                        )}
                    </LazyWarper>
                </ContentView>
            </Layout>
        );
    }
}
