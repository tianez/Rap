/**
 * 我的发起
 */
import React, { Component } from "react";
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

import styles from "./RelatedToMe.scss";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    initialPage: state.getIn(["init", "initialPageOriginate"])
}))
export default class Originate extends Component {
    static defaultProps = {
        initialPage: 0
    };
    state = {
        counts: {}
    };
    handleChange = (tab, index) => {
        this.props.dispatch.setIn(["init", "initialPageOriginate"], index);
    };
    handleCount = (index, count) => {
        let { counts } = this.state;
        counts[index] = count;
        this.setState({
            counts
        });
    };
    handleClick = data => {
        let { history } = this.props;
        let type = data.type * 1;
        if (type == 1) {
            history.push("/notice/approved/" + data.businessId);
        } else if (type == 2) {
            history.push("/approved/detail/" + data.businessId);
        }
    };
    render() {
        let { initialPage } = this.props;
        let { counts } = this.state;
        const tabs = [
            { title: "全部", sub: "0" },
            { title: <Badge text={counts[1]}>审批中</Badge>, sub: "1" },
            { title: "已审批", sub: "2" }
        ];
        return (
            <Layout>
                <NavBar mode="light" icon={<LeftIcon />}>
                    {"我的发起"}
                </NavBar>
                <Content className={styles.content}>
                    <Tabs tabs={tabs} initialPage={initialPage} onChange={this.handleChange}>
                        {tabs &&
                            tabs.map((list, index) => {
                                return (
                                    <ListItems
                                        key={index}
                                        index={index}
                                        cur={initialPage}
                                        onClick={this.handleClick}
                                        onCount={this.handleCount}
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
    componentWillMount() {
        this.handleinitReq(this.props, true);
    }
    componentWillReceiveProps(nextProps) {
        this.handleinitReq(nextProps);
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
        let { index, pageSize, onCount } = this.props;
        page = page + 1;
        let params = {
            userId: localStorage.userId,
            uid: localStorage.userId,
            pageNo: page,
            pageSize: pageSize,
            orgid: localStorage.organizationId
            // states: 1, //1:审批中，2：审批通过，3：拒绝
        };
        let url = "approve/applyList";
        if (index == 1) {
            params.states = 1;
        } else if (index == 2) {
            url += "?states=2&states=3";
            // params.states = {0:2,1:3}
        }
        let res = await Request(url, { params });
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
            if (index == 1) {
                onCount && onCount(1, count);
            }
        }
        this.loading = false;
    };
    render() {
        let { onClick } = this.props;
        let { data, hasNext, loading } = this.state;
        return (
            <LazyWarperView onScroll={this.handleScroll}>
                <List>
                    {data.length > 0 ? (
                        data.map(item => {
                            let username = item.ccUserName || item.userName;
                            return (
                                <Item
                                    key={item.businessId}
                                    arrow="horizontal"
                                    className={styles.Item}
                                    thumb={<ThumbView>{username.slice(0, 1)}</ThumbView>}
                                    multipleLine
                                    onClick={onClick.bind(null, item)}
                                >
                                    <div>{item.applyTitle}</div>
                                    <Brief>
                                        <div>发起时间：{item.applyTime}</div>
                                        <div className={styles.status}>{item.applyStateName}</div>
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
