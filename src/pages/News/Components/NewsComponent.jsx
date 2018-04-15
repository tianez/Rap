import React, { Component } from "react";
import { Tabs, WhiteSpace } from "antd-mobile";
import List from "./List";
export default class NewsComponent extends Component {
    renderContent = tab => <List tab={tab} />;
    render() {
        const tabs = [
            { title: "恩施", id: 1 },
            { title: "利川", id: 2 },
            { title: "咸丰", id: 3 },
            { title: "巴东", id: 4 },
            { title: "鹤峰", id: 5 },
            { title: "来凤", id: 6 },
            { title: "宣恩", id: 7 },
            { title: "建始", id: 8 }
        ];
        return (
            <Tabs tabs={tabs} className="ds" renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                {this.renderContent}
            </Tabs>
        );
    }
}
