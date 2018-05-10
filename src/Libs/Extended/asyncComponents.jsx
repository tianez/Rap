import React, { Component } from "react";
import Loadable from "react-loadable";
import { NavBar, Icon } from "antd-mobile";
import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";

import styles from "./asyncComponents.scss";

const LoadingFarmeWork = props => (
    <Layout>
        <NavBar mode="light" icon={<LeftIcon />} />
        <Content>
            <LoadingComponent {...props} />
        </Content>
    </Layout>
);

const LoadingComponent = ({ error, timedOut, pastDelay, retry, ...rest }) => {
    console.log(rest);
    if (error) {
        return <LoadingError onClick={retry} title={"模块加载失败，点击重试"} />;
    } else if (timedOut) {
        return <LoadingError onClick={retry} title={"模块加载超时，点击重试"} />;
    } else if (pastDelay) {
        return <Loading />;
    }
    return null;
};

const LoadingError = ({ onClick, title }) => (
    <div className={styles.loading}>
        <div className={styles.loadingTitle} onClick={onClick}>
            {title}
        </div>
    </div>
);

const Loading = () => (
    <div className={styles.loading}>
        <Icon type="loading" />
        <div className={styles.loadingTitle}>模块加载中...</div>
    </div>
);

const asyncComponent = (importComponent, isRouter = false) =>
    Loadable({
        loader: () => importComponent(),
        loading: props => (isRouter ? <LoadingFarmeWork {...props} /> : <LoadingComponent {...props} />),
        delay: 200,
        timeout: 6000
    });

export default asyncComponent;
