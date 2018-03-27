import React, { Component } from "react";
import { Menu, Icon } from "antd";
import ContentInLineView from "Views/Layout/ContentInLineView";

import styles from "./styles.scss";

const MainContent = ({ title, children }) => (
    <div className={styles.container}>
        <Menu mode="horizontal" selectedKeys={["all"]}>
            <Menu.Item key="all">
                <Icon type="mail" />
                {title}
            </Menu.Item>
        </Menu>
        <ContentInLineView className={styles.ContentInLineView}>{children}</ContentInLineView>
    </div>
);

export default MainContent;
