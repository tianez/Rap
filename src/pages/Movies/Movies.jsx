import React, { Component } from "react";
import ContentView from "Views/Layout/ContentView";
import Layout from "../Layout/Layout";
import asyncComponent from "Extended/asyncComponent";
const MoviesTabs = asyncComponent(() => import("./Components/MoviesTabs"));
const News = props => {
    return (
        <Layout title="电影资讯" selectedTab="movies">
            <ContentView>
                <MoviesTabs {...props} />
            </ContentView>
        </Layout>
    );
};
export default News;
