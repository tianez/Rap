import React, { Component } from "react";
import { Tabs, WhiteSpace } from "antd-mobile";
import List from "./List";
export default class NewsComponent extends Component {
    state = {};
    renderContent = tab => <List tab={tab} />;
    render() {
        const tabs = [
            { title: "恩施", id: 1 },
            { title: "利川", id: 2 },
            { title: "云上恩施", id: 3 },
            { title: "4th Tab", id: 4 },
            { title: "5th Tab", id: 5 },
            { title: "6th Tab", id: 6 },
            { title: "7th Tab", id: 7 },
            { title: "8th Tab", id: 8 },
            { title: "9th Tab", id: 9 }
        ];
        return (
            <Tabs tabs={tabs} className="ds" renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
                {this.renderContent}
            </Tabs>
        );
    }
}
