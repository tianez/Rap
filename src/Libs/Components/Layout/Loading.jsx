import React, { Component } from "react";
import { Icon } from "antd-mobile";

import styles from "./Loading.scss";
const Loading = ({
    loading,
    loadingshow = true,
    reflush = false,
    loadingTitle = "数据加载中",
    error,
    errorAction,
    children
}) => {
    if (loading) {
        if (!loadingshow) {
            return null;
        }
        if (reflush) {
            return (
                <div className={styles.reflush}>
                    <Icon type="loading" />
                </div>
            );
        }
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
    return children || null;
};

export default Loading;
