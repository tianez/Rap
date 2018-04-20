import React, { Component } from "react";
import { NavBar } from "antd-mobile";
import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";
import Footer from "./Footer";
import styles from "./Layout.scss";
const Layout = ({ headerShow = true, border = true, title, selectedTab, children }) => {
    return (
        <LayoutView>
            {headerShow && (
                <NavBar mode="light" className={border && styles.header}>
                    {title}
                </NavBar>
            )}
            {children}
            <Footer selectedTab={selectedTab} />
        </LayoutView>
    );
};
export default Layout;
