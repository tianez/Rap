import React, { Component } from "react";
import { Icon } from "antd-mobile";

import styles from "./Loading.scss";
const Loading = ({ loading, loadingTitle = "数据加载中", error, errorAction, children }) => {
    if (loading) {
        return (
            <div className={styles.loading}>
                <Icon type="loading" />
                <div className={styles.loadingTitle}>{loadingTitle}</div>
            </div>
        );
    }
    if (error) {
        return <div className={styles.loading}>{errorAction || "出错了"}</div>;
    }
    return children;
};

export default Loading;
