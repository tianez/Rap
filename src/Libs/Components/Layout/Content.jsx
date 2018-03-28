import React, { Component } from "react";

import styles from "./Layout.scss";

const Content = ({ children, ...props }) => (
    <div className={styles.content} {...props}>
        {children}
    </div>
);

export default Content;
