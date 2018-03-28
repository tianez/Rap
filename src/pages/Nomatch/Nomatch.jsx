import React, { Component } from "react";
import { NavBar, Icon, Result } from "antd-mobile";
import { Redirect } from "react-router-dom";
import { contextConsumers } from "Libs/ContextRudex";

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import styles from "./nomatch.scss";

export default class Nomatch extends React.Component {
    render() {
        let { title, children } = this.props;
        return (
            <Layout>
                <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => window.history.back()}>
                    登录
                </NavBar>
                <Content>
                    <Result
                        className={styles.nomatch}
                        img={
                            <img
                                src={"https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"}
                                className={styles.outImg}
                            />
                        }
                        title={title}
                        message={children}
                    />
                </Content>
            </Layout>
        );
    }
}
