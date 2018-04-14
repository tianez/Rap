import React, { Component } from "react";
import asyncComponent from "Extended/asyncComponent";
import ContentView from "Views/Layout/ContentView";
import Layout from "../Layout/Layout";
const UcenterComponent = asyncComponent(() => import("./UcenterComponent"));
const Ucenter = () => {
    return (
        <Layout title="个人中心" selectedTab="ucenter">
            <ContentView>
                <UcenterComponent />
            </ContentView>
        </Layout>
    );
};
export default Ucenter;
