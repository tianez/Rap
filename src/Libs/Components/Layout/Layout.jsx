/**
 * 路由级别页面加载骨架
 */

import React, { Component } from "react";
import styles from "./Layout.scss";

const Layout = ({ children, ...props }) => (
    <div className={styles.layout} onClick={e => e.stopPropagation()} {...props}>
        {children}
    </div>
);

export default Layout;
