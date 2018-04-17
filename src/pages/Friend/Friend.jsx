import React, { Component } from "react";
import { List, WhiteSpace } from "antd-mobile";
const Item = List.Item;

import ContentView from "Views/Layout/ContentView";
import Layout from "../Layout/Layout";

import asyncComponent from "Extended/asyncComponent";
const FriendComponent = asyncComponent(() => import("./FriendComponent"));

const Friend = props => {
    return (
        <Layout title="好友" selectedTab="friend">
            <ContentView>
                <FriendComponent {...props} />
            </ContentView>
        </Layout>
    );
};
export default Friend;
