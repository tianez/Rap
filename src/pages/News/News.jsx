import React, { Component } from "react";
import asyncComponent from "Extended/asyncComponent";
import ContentView from "Views/Layout/ContentView";
import Layout from "../Layout/Layout";
const News = () => {
    return (
        <Layout title="新闻" selectedTab="news">
            <ContentView>news</ContentView>
        </Layout>
    );
};
export default News;
