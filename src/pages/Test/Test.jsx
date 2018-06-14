import React, { Component } from "react";
import { NavBar } from "antd-mobile";
import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";
import LeftIcon from "Components/Layout/LeftIcon";

import fetchJsonp from "Utils/fetchJsonp";

export default class Test extends Component {
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        let res = await fetchJsonp("https://api.douban.com/v2/user/1000001");
        console.log(res);
    };
    render() {
        return (
            <LayoutView>
                <NavBar mode="dark" icon={<LeftIcon />}>
                    测试页面
                </NavBar>
                <ContentView>
                    <div>111111111111111111111111111111111</div>
                </ContentView>
            </LayoutView>
        );
    }
}
