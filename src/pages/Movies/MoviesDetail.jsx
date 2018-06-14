import React, { Component } from "react";
import { Link } from "react-router-dom";
import BaseLayout from "../Layout/BaseLayout";
import ContentView from "Views/Layout/ContentView";
import Loading from "Components/Layout/Loading";

import styles from "./Detail.scss";
import GetData from "Hoc/GetDataDouBan";
@GetData
export default class MoviesDetail extends Component {
    state = {
        data: null,
        isCache: false
    };
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        let { id } = this.props.match.params;
        this.props.getData({ url: `movie/subject/${id}` }, async data => {
            this.setState({ data });
        });
    };
    render() {
        let { loadState, match } = this.props;
        let { id } = match.params;
        let { data, isCache } = this.state;
        return (
            <BaseLayout title="详情">
                <ContentView style={{ padding: "15px", background: "#fff" }}>
                    <Loading
                        {...loadState}
                        reflush={isCache}
                        errorAction={<div onClick={this.getData}>出错了，点击重试！</div>}
                    >
                        {data && (
                            <div>
                                <div className={styles.title}>
                                    {data.title + " " + data.original_title}（{data.year}）
                                </div>
                                <div className={styles.info}>
                                    <div>
                                        导演：{data.directors.map(d => {
                                            return d.name + "，";
                                        })}
                                    </div>
                                    {data.writers && (
                                        <div>
                                            编剧：{data.writers.map(d => {
                                                return d.name + "，";
                                            })}
                                        </div>
                                    )}
                                    <div>
                                        主演：{data.casts.map(d => {
                                            return (
                                                <Link key={d.id} to={`/movies/celebrity/${d.id}`}>
                                                    {d.name + "，"}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                    <div>
                                        类型：{data.genres.map(d => {
                                            return d + "，";
                                        })}
                                    </div>
                                    <div>
                                        制片国家/地区：{data.countries.map(d => {
                                            return d + "，";
                                        })}
                                    </div>
                                    <div>
                                        别名：{data.aka.map(d => {
                                            return d + "，";
                                        })}
                                    </div>
                                    <div>评分：{data.rating.average}</div>
                                    <div>评分人数：{data.ratings_count}</div>
                                    <div>想看人数：{data.wish_count}</div>
                                    <div>看过人数：{data.collect_count}</div>
                                </div>
                                <div className={styles.content}>
                                    <div>{data.images && <img src={data.images.large} alt="" />}</div>
                                    <div dangerouslySetInnerHTML={{ __html: data.summary }} />
                                </div>
                            </div>
                        )}
                    </Loading>
                </ContentView>
            </BaseLayout>
        );
    }
}
