import React, { Component } from "react";
import ContentView from "Views/Layout/ContentView";
import BaseLayout from "../Layout/BaseLayout";

import Loading from "Components/Layout/Loading";
import dayjs from "dayjs";

import styles from "./Detail.scss";

import GetData from "Hoc/GetData";
@GetData
export default class Detail extends Component {
    state = {
        isCache: false,
        loadState: {}
    };
    static getDerivedStateFromProps(nextProps, prevState) {
        // let data = Object.keys(nextProps.data).length > 0 ? nextProps.data : prevState.data;
        return {
            // data: data,
            data: nextProps.data,
            loadState: nextProps.loadState
        };
    }
    componentDidMount() {
        this.props.getData(`article/${this.props.match.params.id}`);
        // this.getData();
    }
    getData = async () => {
        let { id } = this.props.match.params;
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
        this.props.getData(`article/${id}`);
    };
    render() {
        let { data = {}, loadState, isCache } = this.state;
        return (
            <BaseLayout title={"文章详情"}>
                <ContentView style={{ padding: "15px", background: "#fff" }}>
                    <Loading
                        {...loadState}
                        loadingTitle={isCache ? "刷新中..." : "获取数据中..."}
                        errorAction={<div onClick={this.props.getData}>出错了，点击重试！</div>}
                    />
                    <div className={styles.title}>{data.title}</div>
                    <div className={styles.info}>{dayjs(data.createdAt).format("YYYY-MM-DD HH:mm:ss")}</div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.content }} />
                </ContentView>
            </BaseLayout>
        );
    }
}
