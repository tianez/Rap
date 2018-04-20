import React, { Component } from "react";
import ContentView from "Views/Layout/ContentView";
import Layout from "../Layout/Layout";
import asyncComponent from "Extended/asyncComponent";
const ServiceComponent = asyncComponent(() => import("./Components/ServiceComponent"));
const Service = () => {
    return (
        <Layout title="服务" selectedTab="service">
            <ContentView>
                <ServiceComponent />
            </ContentView>
        </Layout>
    );
};
export default Service;
