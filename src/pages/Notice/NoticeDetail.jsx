import React, { Component } from "react";
import { NavBar, Toast } from "antd-mobile";
import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";

import styles from "./NoticeDetail.scss";
export default class NoticeDetail extends Component {
    state = {
        data: {}
    };
    componentDidMount() {
        this.reqData();
    }
    /**获取用户列表信息 */
    reqData = async () => {
        let { match } = this.props;
        let url = "bulletinInformation/getOneBulletin";
        Toast.loading("数据加载中，请稍后...", 0);
        let res = await Request(url, {
            params: {
                userId: localStorage.userId,
                bulletinId: match.params.id,
                orgId: localStorage.organizationId
            }
        });
        if (res.success === true) {
            console.log(res);
            Toast.hide();
            this.setState({
                data: res.data.bul
            });
        } else {
            Toast.fail(res.message);
        }
    };
    render() {
        let { data } = this.state;
        return (
            <Layout>
                <NavBar mode="light" icon={<LeftIcon />}>
                    通知公告
                </NavBar>
                <Content style={{ padding: "15px", background: "#fff", borderTop: "1px solid #ccc" }}>
                    <div className={styles.titles}>
                        <div className={styles.title}>{data.title}</div>
                        <div className={styles.time}>
                            <span>{data.releaseTime}</span>
                        </div>
                        <div className={styles.time}>
                            <span className={styles.read}>{data.isRead}人已读</span>
                            <span className={styles.read}>{data.unRead}人未读</span>
                        </div>
                    </div>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: data.content }} />
                </Content>
            </Layout>
        );
    }
}
