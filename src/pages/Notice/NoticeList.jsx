/**
 * 通知公告
 */
import React, { Component } from "react";
import { contextConsumers } from "Libs/ContextRudex";
import { NavBar, Icon, List, WhiteSpace, Tabs, Badge } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";
import Time from "Extended/Time/Time";

import LoadMoreView from "Components/Views/ApprovedProgress/LoadMoreView";
import NoDataView from "Components/Views/ApprovedProgress/NoDataView";
import LazyWarperView from "Components/Views/ApprovedProgress/LazyWarperView";
import ThumbView from "Components/Views/ApprovedProgress/ThumbView";
import { AuthComponent } from "Hoc/Authorized";

import styles from "./Notice.scss";

@contextConsumers(state => ({
    initialPage: state.getIn(["init", "initialPageNotice"])
}))
export default class NoticeList extends Component {
    static defaultProps = {
        initialPage: 0
    };
    state = {
        counts: {}
    };
    handleChange = (tab, index) => {
        this.props.dispatch.setIn(["init", "initialPageNotice"], index);
    };
    handleCount = (index, count) => {
        let { counts } = this.state;
        counts[index] = count;
        this.setState({
            counts
        });
    };
    handleSubmit = async () => {
        this.props.history.push("/notice/public");
    };
    render() {
        let { initialPage } = this.props;
        let { counts } = this.state;
        const tabs = [
            { title: <Badge text={counts[0]}>未读</Badge>, sub: "0", bulletinState: 0 },
            { title: "已读", sub: "1", bulletinState: 1 }
        ];
        return (
            <Layout>
                <NavBar
                    mode="light"
                    icon={<LeftIcon />}
                    rightContent={
                        // <AuthComponent auth={"app.noticepublic"}>
                        <span onClick={this.handleSubmit}>写公告</span>
                        // </AuthComponent>
                    }
                >
                    通知公告
                </NavBar>
                <Content>
                    <Tabs tabs={tabs} initialPage={initialPage} onChange={this.handleChange}>
                        {tabs &&
                            tabs.map((list, index) => {
                                return (
                                    <ListItems
                                        key={list.bulletinState}
                                        index={list.bulletinState}
                                        cur={initialPage}
                                        bulletinState={list.bulletinState}
                                        onCount={this.handleCount}
                                        history={this.props.history}
                                    />
                                );
                            })}
                    </Tabs>
                </Content>
            </Layout>
        );
    }
}

class ListItems extends Component {
    static defaultProps = {
        pageSize: 10
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            page: 1,
            hasNext: true
        };
        this.loading = false;
    }
    componentDidMount() {
        this.handleinitReq(this.props, true);
    }
    componentDidUpdate() {
        this.handleinitReq(this.props);
    }
    handleinitReq = (props, init = false) => {
        let { cur, index } = props;
        if (index == cur || init) {
            this.handleReq(0, [], true);
        }
    };
    handleScroll = viewport => {
        let { top } = this.load.getBoundingClientRect();
        let height = window.screen.height;
        if (top < height + 100) {
            this.handleReq();
        }
    };
    handleReq = async (page = this.state.page, data = this.state.data, hasNext = this.state.hasNext) => {
        if (this.loading) {
            return;
        }
        if (!hasNext) {
            return;
        }
        this.loading = true;
        let { index, pageSize, onCount, bulletinState } = this.props;
        page = page + 1;
        let params = {
            pageNo: page,
            pageSize: pageSize,
            userId: localStorage.userId,
            bulletinState
        };
        let res = await Request("bulletinInformation/getBulletinList", {
            params
        });
        if (res.success) {
            let { list, count } = res.data.page;
            data = data.concat(list);
            this.setState({
                data: data,
                page: page,
                loading: false,
                count: count,
                hasNext: list.length > 0 && list.length > pageSize - 1
            });
            onCount && onCount(index, count);
        }
        this.loading = false;
    };
    handleRowClick = item => {
        this.props.history.push("/notice/" + item.id);
    };
    render() {
        let { onClick, bulletinState } = this.props;
        let { data, hasNext, loading } = this.state;
        return (
            <LazyWarperView onScroll={this.handleScroll}>
                <List>
                    {data.length > 0 ? (
                        data.map(item => {
                            return (
                                <Item
                                    key={item.id}
                                    arrow="horizontal"
                                    className={styles.Item}
                                    thumb={<ThumbView>通</ThumbView>}
                                    multipleLine
                                    onClick={this.handleRowClick.bind(null, item)}
                                >
                                    <div>{item.title}</div>
                                    <Brief>
                                        <div>发起时间：{item.releaseTime}</div>
                                        <div className={styles.status}>{bulletinState == 0 ? "未读" : "已读"}</div>
                                    </Brief>
                                </Item>
                            );
                        })
                    ) : (
                        <Item>
                            <NoDataView>暂无数据</NoDataView>
                        </Item>
                    )}
                </List>
                <div ref={ele => (this.load = ele)} />
                {!hasNext
                    ? data.length > 0 && <LoadMoreView>没有更多数据了</LoadMoreView>
                    : !loading && <LoadMoreView onClick={this.handleReq}>更多数据加载中...</LoadMoreView>}
            </LazyWarperView>
        );
    }
}
