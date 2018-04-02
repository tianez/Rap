import React, { Component } from "react";

import styles from "./Content.scss";

const Content = ({ children, ...props }) => (
    <div className={styles.content} {...props}>
        {children}
    </div>
);

export default Content;
