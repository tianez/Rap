import React, { Component } from "react";
import { NavBar } from "antd-mobile";
import LayoutView from "Views/Layout/LayoutView";
import LeftIcon from "Components/Layout/LeftIcon";
import ContentView from "Views/Layout/ContentView";
import Footer from "./Footer";
import styles from "./Layout.scss";
const BaseLayout = ({ border = true, title, children }) => {
    return (
        <LayoutView>
            <NavBar mode="light" icon={<LeftIcon />} className={border && styles.header}>
                {title}
            </NavBar>
            {children}
        </LayoutView>
    );
};
export default BaseLayout;
