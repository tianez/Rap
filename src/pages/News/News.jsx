import React, { Component } from "react";
import ContentView from "Views/Layout/ContentView";
import Layout from "../Layout/Layout";
import asyncComponent from "Extended/asyncComponent";
const NewsComponent = asyncComponent(() => import("./Components/NewsComponent"));
const News = () => {
    return (
        <Layout title="新闻" selectedTab="news">
            <ContentView>
                <NewsComponent />
            </ContentView>
        </Layout>
    );
};
export default News;
