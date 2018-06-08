import React, { Component } from "react";
import { NavBar, TabBar } from "antd-mobile";
import { Link } from "react-router-dom";
import Immutable from "seamless-immutable";

import asyncComponent from "Extended/asyncComponent";
import ContentView from "Views/Layout/ContentView";
import LazyWarper from "Components/Layout/LazyWarper";
import Loading from "Components/Layout/Loading";

import Layout from "../Layout/Layout";
import delay from "Utils/delay";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import dayjs from "dayjs";
import getWeekOfYear from "Utils/getWeekOfYear";
import { contextConsumers } from "Libs/ContextRudex";
import GetData from "Hoc/GetData";
@contextConsumers((state, props) => ({
    data: state.getIn([localStorage.site_id, "HomeArticle"])
}))
@GetData
export default class Home extends Component {
    static defaultProps = {
        data: Immutable({
            data: [],
            scrolltop: 0,
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
        })
    };
    componentDidMount() {
        // let weeks = getWeekOfYear();
        // console.log(weeks);

        this.getInitData();
    }
    setData = data => {
        this.props.dispatch.setIn([localStorage.site_id, "HomeArticle"], data);
    };
    getInitData = async () => {
        let HomeArticle = this.props.data;
        let { isCache, pageSize } = HomeArticle;
        if (isCache) {
            return;
        }
        let dbData = await db.news
            .reverse()
            .limit(pageSize)
            .toArray();
        if (dbData.length > 0) {
            HomeArticle = HomeArticle.merge({
                isCache: true,
                data: dbData,
                page: 1
            });
            this.setData(HomeArticle);
        } else {
            this.getData();
        }
    };
    handleScroll = viewport => {
        let { error } = this.props.data.loadState;
        if (error) {
            return;
        }
        let { top } = this.load.getBoundingClientRect();
        let height = window.screen.height;
        if (top < height + 100) {
            this.getMoreData();
        }
        clearTimeout(this.delay);
        this.delay = setTimeout(() => {
            this.props.dispatch.setIn([localStorage.site_id, "HomeArticle", "scrolltop"], viewport.scrollTop);
        }, 300);
    };
    getMoreData = async () => {
        let { data, hasMore } = this.props.data;
        if (!hasMore) {
            return;
        }
        this.getData(data, false, 300);
    };
    getData = async (data = $arr, isInit = true, delaytime = 0) => {
        if (this.loading) {
            return;
        }
        this.loading = true;
        this.delayStart = Date.now();
        let HomeArticle = this.props.data;
        HomeArticle = HomeArticle.merge({
            isInit,
            loadState: {
                loading: true,
                error: false,
                errorMsg: ""
            }
        });
        this.setData(HomeArticle);
        let { page, pageSize } = HomeArticle;
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
            HomeArticle = HomeArticle.merge({
                data: data.concat(res.data),
                hasMore: res.data.length == pageSize,
                page: page + 1,
                isCache: true,
                loadState: {
                    loading: false,
                    error: false,
                    errorMsg: ""
                }
            });
        } else {
            HomeArticle = HomeArticle.merge({
                loadState: {
                    loading: false,
                    error: true,
                    errorMsg: res.message
                }
            });
        }
        this.setData(HomeArticle);
    };
    render() {
        let { loadState, data, isCache, isInit, scrolltop } = this.props.data;
        return (
            <Layout title="首页" selectedTab="home">
                <ContentView>
                    <LazyWarper onScroll={this.handleScroll} scrollTop={scrolltop}>
                        <Loading
                            {...loadState}
                            show={isInit}
                            reflush={isCache}
                            loadingTitle={"数据加载中"}
                            errorAction={<div onClick={this.getInitData}>{loadState.errorMsg}，点击重试！</div>}
                        />
                        {data &&
                            data.map(d => {
                                return (
                                    <Link to={`/p/${d.id}`} key={d.id} className="listitem">
                                        {d.thumb && (
                                            <div className="img" style={{ backgroundImage: `url(${d.thumb})` }} />
                                        )}
                                        <div className="detail">
                                            <div className="title">{d.title}</div>
                                            <div className="info">
                                                {dayjs(d.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        <div ref={ele => (this.load = ele)} />
                        <Loading
                            {...loadState}
                            show={!isInit}
                            loadingTitle={"更多数据加载中"}
                            errorAction={<div onClick={this.getMoreData}>{loadState.errorMsg}，点击重试！</div>}
                        />
                    </LazyWarper>
                </ContentView>
            </Layout>
        );
    }
}
