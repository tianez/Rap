import React, { Component } from "react";

import { TabBar } from "antd-mobile";
import styles from "./Footer.scss";

import { contextConsumers } from "Libs/ContextRudex";
import { withRouter } from "react-router-dom";
@contextConsumers(state => ({
    footerTabs: state.getIn(["init", "footerTabs"]) || $arr
}))
@withRouter
export default class Footer extends Component {
    handlePress = url => {
        this.props.history.replace(url);
    };
    render() {
        let { selectedTab, footerTabs } = this.props;
        return (
            <div>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    style={{ height: "0.5rem" }}
                    noRenderContent={true}
                >
                    {footerTabs.map(tab => {
                        return (
                            <TabBar.Item
                                title={tab.title}
                                key={tab.key}
                                icon={<div className={`${tab.icon} ${styles.icon}`} />}
                                selectedIcon={<div className={`${tab.icon} ${styles.selectedIcon}`} />}
                                badge={tab.badge}
                                dot={tab.dot}
                                selected={selectedTab === tab.key}
                                onPress={() => this.handlePress(tab.key)}
                            />
                        );
                    })}
                </TabBar>
            </div>
        );
    }
}
