import React, { Component } from "react";

import { TabBar } from "antd-mobile";
import styles from "./Footer.scss";

import { withRouter } from "react-router-dom";
class Footer extends Component {
    handlePress = url => {
        this.props.history.replace(url);
    };
    render() {
        let { selectedTab } = this.props;
        return (
            <div>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    style={{ height: "0.5rem" }}
                    noRenderContent={true}
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<div className={"iconfont icon-shouye " + styles.icon} />}
                        selectedIcon={<div className={"iconfont icon-shouye " + styles.selectedIcon} />}
                        badge={1}
                        selected={selectedTab === "home"}
                        onPress={() => this.handlePress("home")}
                    />
                    <TabBar.Item
                        title="新闻"
                        key="news"
                        icon={<div className={"iconfont icon-news " + styles.icon} />}
                        selectedIcon={<div className={"iconfont icon-news " + styles.selectedIcon} />}
                        selected={selectedTab === "news"}
                        onPress={() => this.handlePress("news")}
                    />
                    <TabBar.Item
                        title="好友"
                        key="friend"
                        dot
                        icon={<div className={"iconfont icon-tongxun " + styles.icon} />}
                        selectedIcon={<div className={"iconfont icon-tongxun " + styles.selectedIcon} />}
                        selected={selectedTab === "friend"}
                        onPress={() => this.handlePress("friend")}
                    />
                    <TabBar.Item
                        title="个人中心"
                        key="my"
                        icon={<div className={"iconfont icon-gerenzhongxin " + styles.icon} />}
                        selectedIcon={<div className={"iconfont icon-gerenzhongxin " + styles.selectedIcon} />}
                        selected={selectedTab === "ucenter"}
                        onPress={() => this.handlePress("ucenter")}
                    />
                </TabBar>
            </div>
        );
    }
}

export default withRouter(Footer);
