import React, { Component } from "react";
import ContentView from "Views/Layout/ContentView";
import Layout from "../Layout/Layout";
import asyncComponent from "Extended/asyncComponent";
const UcenterComponent = asyncComponent(() => import("./UcenterComponent"));
const Ucenter = ({ history }) => {
    return (
        <Layout title="个人中心" border={false} selectedTab="ucenter">
            <ContentView>
                <UcenterComponent history={history} />
            </ContentView>
        </Layout>
    );
};
export default Ucenter;
