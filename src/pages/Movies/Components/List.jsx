import React, { Component } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import LazyWarper from "Components/Layout/LazyWarper";
import Loading from "Components/Layout/Loading";
import styles from "./List.scss";

import GetData from "Hoc/GetDataDouBan";
@GetData
export default class List extends Component {
    state = {
        data: [],
        total: 0,
        start: 0,
        count: 20,
        more: true,
        isInit: true
    };
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        let { tab, dispatch } = this.props;
        let { data, start, count } = this.state;
        this.props.getData(
            {
                url: tab.key,
                params: {
                    start,
                    count,
                    city: "恩施"
                }
            },
            async res => {
                this.setState({
                    total: res.total,
                    more: res.subjects.length < count ? false : true,
                    start: start + count,
                    data: data.concat(res.subjects),
                    isInit: false
                });
            }
        );
    };
    handleScroll = viewport => {
        let { more } = this.state;
        if (!more) {
            return;
        }
        let { error } = this.props.loadState;
        if (error) {
            return;
        }
        let { top } = this.load.getBoundingClientRect();
        let height = window.screen.height;
        if (top < height + 100) {
            this.getData();
        }
    };
    render() {
        let { match, loadState } = this.props;
        let { data, isInit, more } = this.state;
        return (
            <LazyWarper onScroll={this.handleScroll}>
                {data.map(d => {
                    return (
                        <Link to={`/movies/${d.id}`} key={d.id} className="listitem">
                            {d.images && <div className="img" style={{ backgroundImage: `url(${d.images.small})` }} />}
                            <div className="detail">
                                <div className="title">{d.title}</div>
                                <div className="info">{dayjs(d.createdAt).format("YYYY-MM-DD HH:mm:ss")}</div>
                            </div>
                        </Link>
                    );
                })}
                <div ref={ele => (this.load = ele)} />
                <Loading
                    {...loadState}
                    loadingTitle={"数据加载中"}
                    errorAction={<div onClick={this.getData}>{loadState.errorMsg}，点击重试！</div>}
                >
                    {!more && <div className="nodata">没有更多数据了</div>}
                </Loading>
            </LazyWarper>
        );
    }
}
