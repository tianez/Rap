import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";

import styles from "./Footer.scss";
export default class Footer extends Component {
    render() {
        let { curlink } = this.props;
        return (
            <div className={styles.footer}>
                {curlink == "attendance" ? (
                    <div className={styles.action}>打卡</div>
                ) : (
                    <Link className={styles.action} replace style={{ color: "#666" }} to={"/attendance"}>
                        打卡
                    </Link>
                )}
                {curlink == "setting" ? (
                    <div className={styles.action}>设置</div>
                ) : (
                    <Link className={styles.action} replace style={{ color: "#666" }} to={"/attendance/setting"}>
                        设置
                    </Link>
                )}
            </div>
        );
    }
}
