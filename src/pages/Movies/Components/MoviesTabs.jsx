import React, { Component } from "react";
import { Tabs, WhiteSpace } from "antd-mobile";
import List from "./List";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    movieSelectKey: state.movieSelectKey,
    movies: state.movies
}))
export default class MoviesTabs extends Component {
    renderContent = tab => {
        let { match } = this.props;
        return <List tab={tab} match={match} />;
    };
    handleChange = tab => {
        this.props.dispatch.set({
            movieSelectKey: tab.key
        });
    };
    // handleTabClick = tab => {
    //     let { movies, movieSelectKey } = this.props;
    //     console.log("tab", tab);
    //     if (movieSelectKey == tab.key) {
    //         let movie = movies[tab.key];
    //         movie = movie.merge({
    //             scrollTop: 0,
    //             scrollTopChange: true
    //         });
    //         this.props.dispatch.setIn(["movies", tab.key], movie);
    //     } else {
    //         this.props.dispatch.set({
    //             movieSelectKey: tab.key
    //         });
    //     }
    // };
    render() {
        let { movieSelectKey, movies } = this.props;
        const tabs = [
            { title: "正在上映", key: "movie/in_theaters" },
            // { title: "新片榜", key: "movie/new_movies" },
            { title: "即将上映", key: "movie/coming_soon" },
            { title: "Top250", key: "movie/top250" },
            { title: "北美票房榜", key: "movie/us_box" }
            // { title: "口碑榜", key: "movie/weekly" }
        ];
        return (
            <Tabs
                tabs={tabs}
                page={movieSelectKey}
                onChange={this.handleChange}
                // onTabClick={this.handleTabClick}
                renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}
            >
                {this.renderContent}
            </Tabs>
        );
    }
}
