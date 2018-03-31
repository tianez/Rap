import React, { Component } from "react";
import { NavBar, Icon, List, WhiteSpace, Tabs, Toast, Badge } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";

import ListItems1 from "./ListItems1";
import ListItems2 from "./ListItems2";

import styles from "./ApprovedList.scss";

export default class ApprovedList extends Component {
    state = {
        counts: {},
        initialPage: 0
    };
    handleChange = (tab, index) => {
        this.setState({ initialPage: index });
    };
    handleCount = (index, count) => {
        let { counts } = this.state;
        counts[index] = count;
        this.setState({
            counts
        });
    };
    handleClick = async (data, id) => {
        this.props.history.push("/approved/detail/" + id + "?readState=" + data.readState);
    };
    handleSubmit = async data => {
        this.props.history.push("/approved/ribao");
    };
    render() {
        let { counts, initialPage } = this.state;
        const tabs = [{ title: "抄送给我的", sub: "0" }, { title: "我的日志", sub: "1" }];
        return (
            <Layout>
                <NavBar mode="light" icon={<LeftIcon />} rightContent={<span onClick={this.handleSubmit}>写日志</span>}>
                    日志
                </NavBar>
                <Content>
                    <Tabs tabs={tabs} initialPage={initialPage} onChange={this.handleChange}>
                        <ListItems1
                            key={0}
                            index={0}
                            cur={initialPage}
                            formCode={"form-ribao-1"}
                            onClick={this.handleClick}
                            onCount={this.handleCount}
                        />
                        <ListItems2
                            key={1}
                            index={1}
                            cur={initialPage}
                            formCode={"form-ribao-1"}
                            onClick={this.handleClick}
                            onCount={this.handleCount}
                        />
                    </Tabs>
                </Content>
            </Layout>
        );
    }
}
