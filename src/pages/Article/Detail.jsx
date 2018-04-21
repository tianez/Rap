import React, { Component } from "react";

import ReqData from "../Layout/ReqData";
import styles from "./Detail.scss";

export default class Detail extends Component {
    render() {
        let { match } = this.props;
        return (
            <ReqData title="文章详情" url={`article/${match.params.id}`} id={match.params.id}>
                {data => {
                    return (
                        <div>
                            <div className={styles.title}>{data.title}</div>
                            <div className={styles.info}>{data.createdAt}</div>
                            <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.content }} />
                        </div>
                    );
                }}
            </ReqData>
        );
    }
}
