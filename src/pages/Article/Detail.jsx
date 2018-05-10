import React, { Component } from "react";
import { NoticeBar } from "antd-mobile";
import ContentView from "Views/Layout/ContentView";
import BaseLayout from "../Layout/BaseLayout";

import Loading from "Components/Layout/Loading";
import dayjs from "dayjs";

import styles from "./Detail.scss";

import delay from "Utils/delay";

import GetData from "Hoc/GetData";
import { contextConsumers } from "Libs/ContextRudex";
@GetData
@contextConsumers(state => ({
    onLine: state.onLine
}))
export default class Detail extends Component {
    state = {
        data: {},
        isCache: false
    };
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
            let update_time = dbData[0].update_time;
            if (update_time && Date.now() - update_time < 10 * 1000) {
                return;
            }
        }
        if (onLine) {
            this.props.getData({ url: `article/${id}` }, async data => {
                this.setState({ data });
                db.news.put({ ...data, update_time: Date.now() });
            });
        }
    };
    render() {
        let { onLine, loadState } = this.props;
        let { data, isCache } = this.state;
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
                        reflush={isCache}
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
