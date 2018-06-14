import React, { Component } from "react";
import BaseLayout from "../Layout/BaseLayout";
import ContentView from "Views/Layout/ContentView";
import Loading from "Components/Layout/Loading";

import styles from "./Detail.scss";
import GetData from "Hoc/GetDataDouBan";
@GetData
export default class MoviesCelebrity extends Component {
    state = {
        data: null,
        isCache: false
    };
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        let { id } = this.props.match.params;
        this.props.getData({ url: `movie/celebrity/${id}` }, async data => {
            this.setState({ data });
        });
    };
    render() {
        let { loadState } = this.props;
        let { data } = this.state;
        return (
            <BaseLayout title="详情">
                <ContentView style={{ padding: "15px", background: "#fff" }}>
                    <Loading {...loadState} errorAction={<div onClick={this.getData}>出错了，点击重试！</div>}>
                        {data && (
                            <div>
                                <div className={styles.title}>{data.name}</div>
                                <div className={styles.info}>
                                    <div>性别：{data.gender}</div>
                                    <div>英文名：{data.name_en}</div>
                                    <div>出生地：{data.born_place}</div>
                                </div>
                                {/* <div className={styles.content}>
                                    <div>{data.avatars && <img src={data.avatars.large} alt="" />}</div>
                                </div> */}
                            </div>
                        )}
                    </Loading>
                </ContentView>
            </BaseLayout>
        );
    }
}
