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
        let res = await Request("http://cloudhubei.estv.com.cn/api/front/content/get", {
            params: {
                id: this.props.match.params.id
            }
        });
        if (res.success) {
            this.setState({
                data: res.body,
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
            <BaseLayout title={data.channelName}>
                <ContentView style={{ padding: "15px", background: "#fff" }}>
                    <Loading {...detailStatus} errorAction={<div onClick={this.getData}>出错了，点击重试！</div>}>
                        <div className={styles.title}>{data.title}</div>
                        <div className={styles.info}>{data.releaseDate}</div>
                        <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.txt }} />
                    </Loading>
                </ContentView>
            </BaseLayout>
        );
    }
}
