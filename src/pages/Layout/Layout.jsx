import React, { Component } from "react";
import styles from "./Layout.scss";
const Layout = ({ children, message }) => (
    <div className={styles.Layout}>
        <div className={styles.message} id="message" />
        <div className={styles.content}>{children}</div>
    </div>
);

export default Layout;
