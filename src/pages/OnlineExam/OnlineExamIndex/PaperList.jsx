import React, { Component } from "react";
import { List, Toast } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;

import LazyWarper from "Components/LazyWarper/LazyWarper";
import styles from "./OnlineExamIndex.scss";

export default class PaperList extends Component {
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
        this.handleinitReq(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.handleinitReq(nextProps);
    }
    handleinitReq = props => {
        let { cur, index } = props;
        if (index == cur) {
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
        let { index, pageSize } = this.props;
        page = page + 1;
        let params = {
            userId: localStorage.userId,
            pnum: page,
            psize: pageSize
            // orgid: localStorage.organizationId,
        };
        let res = await Request("paper/list", { params });
        if (res.success) {
            let { list, count } = res.data.paperList;
            this.setState({
                data: data.concat(list),
                page: page,
                loading: false,
                count: count,
                hasNext: list.length > 0 && list.length > pageSize - 1
            });
        }
        this.loading = false;
    };
    handleClick = async data => {
        let { history } = this.props;
        history.push("/onlineexam/" + data.id);
    };
    render() {
        let { data, hasNext, loading } = this.state;
        return (
            <div className={styles.Lazy}>
                <LazyWarper onScroll={this.handleScroll} className={styles.LazyWarper}>
                    <List>
                        {data.length > 0 ? (
                            data.map((item, index) => {
                                return (
                                    <Item
                                        key={item.id}
                                        arrow="horizontal"
                                        className={styles.Item}
                                        thumb={<div className={styles.thumb}>试卷{index + 1}</div>}
                                        multipleLine
                                        onClick={this.handleClick.bind(null, item)}
                                    >
                                        <div>{item.papername}</div>
                                        <Brief>
                                            {/* <div>考试时间：<Time time={item.createTime} /></div> */}
                                            <div>考试时间：{item.examtime}分钟</div>
                                        </Brief>
                                    </Item>
                                );
                            })
                        ) : (
                            <Item>
                                <div className={styles.noItem}>暂无数据</div>
                            </Item>
                        )}
                    </List>
                    <div ref={ele => (this.load = ele)} />
                    {!hasNext
                        ? data.length > 0 && <div className={styles.loadmore}>没有更多数据了</div>
                        : !loading && (
                              <div onClick={this.handleReq} className={styles.loadmore}>
                                  更多数据加载中...
                              </div>
                          )}
                </LazyWarper>
            </div>
        );
    }
}
