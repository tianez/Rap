import React, { Component } from "react";
import { NoticeBar } from "antd-mobile";
import ContentView from "Views/Layout/ContentView";
import BaseLayout from "../Layout/BaseLayout";

import Loading from "Components/Layout/Loading";
import dayjs from "dayjs";

import styles from "./Detail.scss";

import GetData from "Hoc/GetData";
import { contextConsumers } from "Libs/ContextRudex";
@GetData
@contextConsumers(state => ({
    onLine: state.onLine
}))
export default class Detail extends Component {
    state = {
        isCache: false,
        loadState: {}
    };
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data) {
            return {
                data: nextProps.data,
                loadState: nextProps.loadState
            };
        }
        return {
            loadState: nextProps.loadState
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        let { onLine, match } = this.props;
        let { id } = match.params;
        let dbData = await db.news
            .where("id")
            .equalsIgnoreCase(id)
            .toArray();
        if (dbData[0]) {
            this.setState({
                data: dbData[0],
                isCache: true
            });
        }
        if (onLine) {
            this.props.getData(`article/${id}`);
        }
    };
    render() {
        let { onLine } = this.props;
        let { data = {}, loadState, isCache } = this.state;
        return (
            <BaseLayout title={"文章详情"}>
                {!onLine && (
                    <NoticeBar mode="closable" icon={null}>
                        无网络，现在访问的是离线数据
                    </NoticeBar>
                )}
                <ContentView style={{ padding: "15px", background: "#fff" }}>
                    <Loading
                        {...loadState}
                        reflush={true}
                        loadingTitle={isCache ? "刷新中..." : "获取数据中..."}
                        errorAction={<div onClick={this.getData}>出错了，点击重试！</div>}
                    />

                    <div className={styles.title}>{data.title}</div>
                    <div className={styles.info}>
                        {data.createdAt && dayjs(data.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.content }} />
                </ContentView>
            </BaseLayout>
        );
    }
}
