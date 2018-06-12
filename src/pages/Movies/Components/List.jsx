import React, { Component } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import LazyWarper from "Components/Layout/LazyWarper";
import Loading from "Components/Layout/Loading";
import styles from "./List.scss";

import { contextConsumers } from "Libs/ContextRudex";
import GetData from "Hoc/GetDataDouBan";
@contextConsumers((state, props) => ({
    movie: state.getIn(["movies", props.tab.key])
}))
@GetData
export default class List extends Component {
    static defaultProps = {
        movie: Immutable({
            data: [],
            total: 0,
            start: 0,
            count: 20,
            more: true,
            isInit: true,
            scrollTop: 0,
            scrollTopChange: true
        })
    };
    componentDidMount() {
        let { isInit } = this.props.movie;
        if (isInit) {
            this.getData();
        }
    }
    getData = async () => {
        let { tab, dispatch, movie } = this.props;
        let { data, start, count, more } = movie;
        if (!more) {
            return;
        }
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
                movie = movie.merge({
                    total: res.total,
                    more: res.subjects.length < count ? false : true,
                    start: start + count,
                    isInit: false,
                    data: movie.data.concat(res.subjects)
                });
                dispatch.setIn(["movies", tab.key], movie);
                // this.setState({
                //     total: res.total,
                //     more: res.subjects.length < count ? false : true,
                //     start: start + count,
                //     data: data.concat(res.subjects),
                //     isInit: false
                // });
            }
        );
    };
    handleScroll = viewport => {
        this.setScrollTop(viewport);
        let { more } = this.props.movie;
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
    setScrollTop = viewport => {
        let { tab } = this.props;
        clearTimeout(this.delay);
        this.delay = setTimeout(() => {
            this.props.dispatch.setIn(["movies", tab.key, "scrollTop"], viewport.scrollTop);
        }, 300);
    };
    scrollTopChangeBack = () => {
        let { dispatch, tab, movie } = this.props;
        movie = movie.merge({
            scrollTopChange: false
        });
        dispatch.setIn(["movies", tab.key], movie);
    };
    render() {
        let { match, loadState, movie } = this.props;
        let { data, isInit, more, scrollTop, scrollTopChange } = movie;
        return (
            <LazyWarper
                onScroll={this.handleScroll}
                scrollTop={scrollTop}
                scrollTopChange={scrollTopChange}
                scrollTopChangeBack={this.scrollTopChangeBack}
            >
                {data.map(d => {
                    return (
                        <Link to={`/movies/${d.id}`} key={d.id} className={styles.listitem}>
                            <div className={styles.img} style={{ backgroundImage: `url(${d.images.small})` }} />
                            <div className={styles.detail}>
                                <div className={styles.title}>{d.title}</div>
                                <div className={styles.info}>
                                    <div>
                                        导演：{d.directors.map(d => {
                                            return d.name + "，";
                                        })}
                                    </div>
                                    <div>
                                        类型：{d.genres.map(d => {
                                            return d + "，";
                                        })}
                                    </div>
                                    <div>评分：{d.rating.average}</div>
                                </div>
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
                    {!more && <div className={styles.nodata}>没有更多数据了</div>}
                </Loading>
            </LazyWarper>
        );
    }
}
