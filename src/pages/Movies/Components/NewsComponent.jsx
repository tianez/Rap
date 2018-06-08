import React, { Component } from "react";
import { Tabs, WhiteSpace } from "antd-mobile";
import List from "./List";
export default class NewsComponent extends Component {
    renderContent = tab => {
        let { match } = this.props;
        return <List tab={tab} match={match} />;
    };
    render() {
        const tabs = [
            { title: "正在上映", id: 131 },
            { title: "新精神", id: 132 },
            { title: "新知识", id: 133 },
            { title: "新规定", id: 134 },
            { title: "书记党课", id: 125 },
            { title: "廉政故事", id: 127 },
            { title: "内部通报", id: 128 },
            { title: "警示教育", id: 129 },
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
