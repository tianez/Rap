import React, { Component } from "react";
import { Tabs, WhiteSpace } from "antd-mobile";
import List from "./List";
export default class MoviesTabs extends Component {
    renderContent = tab => {
        let { match } = this.props;
        return <List tab={tab} match={match} />;
    };
    render() {
        const tabs = [
            { title: "正在上映", key: "movie/in_theaters" },
            // { title: "新片榜", key: "movie/new_movies" },
            { title: "即将上映", key: "movie/coming_soon" },
            { title: "Top250", key: "movie/top250" },
            { title: "北美票房榜", key: "movie/us_box" }
            // { title: "口碑榜", key: "movie/weekly" }
        ];
        return (
            <Tabs tabs={tabs} className="ds" renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
                {this.renderContent}
            </Tabs>
        );
    }
}
