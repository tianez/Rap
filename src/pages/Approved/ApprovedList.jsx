import React, { Component } from "react";

import { NavBar, Icon, List, WhiteSpace, Tabs, Toast, Badge } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";
import Time from "Extended/Time/Time";

import LoadMoreView from "Components/Views/ApprovedProgress/LoadMoreView";
import NoDataView from "Components/Views/ApprovedProgress/NoDataView";
import LazyView from "Components/Views/ApprovedProgress/LazyView";
import LazyWarperView from "Components/Views/ApprovedProgress/LazyWarperView";
import ThumbView from "Components/Views/ApprovedProgress/ThumbView";
import StatusView from "Components/Views/ApprovedProgress/StatusView";

import NomatchView from "Views/NomatchView";

import styles from "./ApprovedList.scss";

const modules = {
    ribao: "日志",
    zhoubao: "周报",
    yuebao: "月报",
    grjh: "个人计划",
    bmjh: "部门计划"
};

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    initialPage: state.getIn(["init", "initialPageCopys"])
}))
export default class ApprovedList extends Component {
    static defaultProps = {
        initialPage: 0
    };
    state = {
        counts: {}
    };
    handleChange = (tab, index) => {
        this.props.dispatch.setIn(["init", "initialPageCopys"], index);
    };
    handleCount = (index, count) => {
        let { counts } = this.state;
        counts[index] = count;
        this.setState({
            counts
        });
    };
    handleClick = async data => {
        this.props.history.push("/approved/detail/" + data.businessId + "?readState=" + data.readState);
    };
    handleSubmit = async data => {
        let { moduleId } = this.props.match.params;
        this.props.history.push("/approved/" + moduleId);
    };
    render() {
        let { moduleId } = this.props.match.params;
        if (!modules[moduleId]) {
            return (
                <Layout>
                    <NavBar mode="light" icon={<LeftIcon />}>
                        模块不存在
                    </NavBar>
                    <Content>
                        <NomatchView>模块不存在</NomatchView>
                    </Content>
                </Layout>
            );
        }
        let { initialPage } = this.props;
        let { counts } = this.state;
        const tabs = [{ title: "抄送给我的", sub: "0" }, { title: "我的日志", sub: "1" }];
        return (
            <Layout>
                <NavBar
                    mode="light"
                    icon={<LeftIcon />}
                    rightContent={<span onClick={this.handleSubmit}>写{modules[moduleId]}</span>}
                >
                    {modules[moduleId]}
                </NavBar>
                <Content>
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
            // states: 1, //1:未读，2：已读
        };
        if (index == 1) {
            params.readState = "N";
        } else if (index == 2) {
            params.readState = "Y";
        }
        let res = await Request("cc/getCcList", { params });
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
                onCount && onCount(1, data.length);
            }
        }
        this.loading = false;
    };
    render() {
        let { onClick, index } = this.props;
        let { data, hasNext, loading } = this.state;
        return (
            <LazyView>
                <LazyWarperView onScroll={this.handleScroll}>
                    <List>
                        {data.length > 0 ? (
                            data.map(item => {
                                let username = item.ccUserName || item.userName || "";
                                return (
                                    <Item
                                        key={item.businessId}
                                        arrow="horizontal"
                                        className={styles.Item}
                                        thumb={<ThumbView>{username.slice(0, 1)}</ThumbView>}
                                        multipleLine
                                        onClick={onClick.bind(null, item)}
                                    >
                                        <div>{item.ccTitle}</div>
                                        <Brief>
                                            <div>
                                                申请时间：<Time time={item.createTime} />
                                            </div>
                                            <div>
                                                抄送时间：<Time time={item.ccTime} />
                                            </div>
                                            {item.readState == "N" ? (
                                                <StatusView disabled>未读</StatusView>
                                            ) : (
                                                <StatusView>已读</StatusView>
                                            )}
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
            </LazyView>
        );
    }
}
