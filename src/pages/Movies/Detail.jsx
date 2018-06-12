import React, { Component } from "react";
import dayjs from "dayjs";

import ContentView from "Views/Layout/ContentView";
import BaseLayout from "../Layout/BaseLayout";

import Loading from "Components/Layout/Loading";
import styles from "./Detail.scss";

import GetData from "Hoc/GetDataDouBan";
import { contextConsumers } from "Libs/ContextRudex";
@GetData
@contextConsumers(state => ({
    onLine: state.onLine
}))
export default class Detail extends Component {
    state = {
        data: null,
        isCache: false
    };
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        let { onLine, match } = this.props;
        let { id } = match.params;
        // let dbData = await db.movies
        //     .where("id")
        //     .equalsIgnoreCase(id)
        //     .toArray();
        // if (dbData[0]) {
        //     this.setState({
        //         data: dbData[0],
        //         isCache: true
        //     });
        //     let update_time = dbData[0].update_time;
        //     if (update_time && Date.now() - update_time < 1000 * 60 * 60) {
        //         return;
        //     }
        // }
        // if (onLine) {
        this.props.getData({ url: `movie/subject/${id}` }, async data => {
            this.setState({ data });
            // db.movies.put({ ...data, update_time: Date.now() });
        });
        // }
    };
    render() {
        let { loadState } = this.props;
        let { data, isCache } = this.state;
        console.log(data);
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
                                    {/* <div>更新时间：{dayjs(data.update_time).format("YYYY-MM-DD HH:mm:ss")}</div> */}

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
                                            return d.name + "，";
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
