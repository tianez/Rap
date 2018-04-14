import React, { Component } from "react";
import asyncComponent from "Extended/asyncComponent";
import ContentView from "Views/Layout/ContentView";
import Layout from "../Layout/Layout";
const Friend = () => {
    return (
        <Layout title="好友" selectedTab="friend">
            <ContentView>Friend</ContentView>
        </Layout>
    );
};
export default Friend;
