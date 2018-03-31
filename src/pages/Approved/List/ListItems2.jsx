import React, { Component } from "react";

import { NavBar, Icon, List, WhiteSpace, Toast, Badge } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;
import Time from "Extended/Time/Time";
import LoadMoreView from "Components/Views/ApprovedProgress/LoadMoreView";
import NoDataView from "Components/Views/ApprovedProgress/NoDataView";
import LazyView from "Components/Views/ApprovedProgress/LazyView";
import LazyWarperView from "Components/Views/ApprovedProgress/LazyWarperView";
import ThumbView from "Components/Views/ApprovedProgress/ThumbView";
import StatusView from "Components/Views/ApprovedProgress/StatusView";

import styles from "./ApprovedList.scss";

export default class ListItems extends Component {
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
            this.handleReq(0, [], true, index);
        }
    };
    handleScroll = viewport => {
        let { top } = this.load.getBoundingClientRect();
        let height = window.screen.height;
        if (top < height + 100) {
            this.handleReq();
        }
    };
    handleReq = async (page = this.state.page, data = this.state.data, hasNext = this.state.hasNext, cur = 0) => {
        if (this.loading) {
            return;
        }
        if (!hasNext) {
            return;
        }
        this.loading = true;
        let { index, pageSize, onCount, formCode } = this.props;
        page = page + 1;
        let params = {
            userId: localStorage.userId,
            uid: localStorage.userId,
            pageNo: page,
            pageSize: pageSize,
            orgid: localStorage.organizationId,
            formCode: formCode
            // states: 1, //1:未读，2：已读
        };
        let url = "form/selectLogList";
        let res = await Request(url, {
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
                                let username = item.user.userName || "";
                                return (
                                    <Item
                                        key={item.id}
                                        arrow="horizontal"
                                        className={styles.Item}
                                        thumb={<ThumbView>{username.slice(0, 1)}</ThumbView>}
                                        multipleLine
                                        onClick={onClick.bind(null, item, item.id)}
                                    >
                                        <div>{item.form.formName}</div>
                                        <Brief>
                                            <div>创建时间：{item.createTime}</div>
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
