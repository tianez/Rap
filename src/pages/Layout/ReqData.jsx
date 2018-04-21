import React, { Component } from "react";
import ContentView from "Views/Layout/ContentView";
import BaseLayout from "./BaseLayout";

import Loading from "Components/Layout/Loading";

export default class ReqData extends Component {
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
        let { url, id, params } = this.props;
        let dbData = await db.news
            .where("id")
            .equalsIgnoreCase(id)
            .toArray();
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
        let res = await Apicloud(url, { params });
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
        let { title, children } = this.props;
        let { data, detailStatus } = this.state;
        return (
            <BaseLayout title={title}>
                <ContentView style={{ padding: "15px", background: "#fff" }}>
                    <Loading {...detailStatus} errorAction={<div onClick={this.getData}>出错了，点击重试！</div>}>
                        {children(data)}
                    </Loading>
                </ContentView>
            </BaseLayout>
        );
    }
}
