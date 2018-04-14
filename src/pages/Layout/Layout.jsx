import React, { Component } from "react";
import { NavBar } from "antd-mobile";

import asyncComponent from "Extended/asyncComponent";

import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";

import Footer from "./Footer";
const Layout = ({ title, selectedTab, children }) => {
    return (
        <LayoutView>
            <NavBar mode="light">{title}</NavBar>
            {children}
            <Footer selectedTab={selectedTab} />
        </LayoutView>
    );
};
export default Layout;
