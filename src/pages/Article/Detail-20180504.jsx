import React, { Component } from "react";
import ContentView from "Views/Layout/ContentView";
import BaseLayout from "../Layout/BaseLayout";

import Loading from "Components/Layout/Loading";

import styles from "./Detail.scss";

export default class Detail extends Component {
    state = {
        data: {},
        detailStatus: {
            loading: false,
            error: false,
            errorMsg: ""
        }
    };
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            data: nextProps.data,
            detailStatus: nextProps.loadState
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        this.setState({
            detailStatus: {
                loading: true,
                error: false,
                errorMsg: ""
            }
        });
        let { match } = this.props;
        console.time("testForEach");
        console.time("testForEach2");
        let dbData = await db.news
            .where("id")
            .equalsIgnoreCase(match.params.id)
            .toArray();
        console.timeEnd("testForEach");
        if (dbData[0]) {
            this.setState({
                data: dbData[0],
                detailStatus: {
                    loading: false,
                    error: false,
                    errorMsg: ""
                }
            });
        }
        let res = await Apicloud(`article/${match.params.id}`);
        console.timeEnd("testForEach2");
        if (res.success) {
            db.news.put(res.data);
            this.setState({
                data: res.data,
                detailStatus: {
                    loading: false,
                    error: false,
                    errorMsg: ""
                }
            });
        } else {
            this.setState({
                detailStatus: {
                    loading: false,
                    error: true,
                    errorMsg: res.message
                }
            });
        }
    };
    render() {
        let { data, detailStatus } = this.state;
        return (
            <BaseLayout title={"文章详情"}>
                <ContentView style={{ padding: "15px", background: "#fff" }}>
                    <Loading {...detailStatus} errorAction={<div onClick={this.props.getData}>出错了，点击重试！</div>}>
                        <div className={styles.title}>{data.title}</div>
                        <div className={styles.info}>{data.createdAt}</div>
                        <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.content }} />
                    </Loading>
                </ContentView>
            </BaseLayout>
        );
    }
}
