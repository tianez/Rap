import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { NavBar } from "antd-mobile";

import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";
import LeftIcon from "Components/Layout/LeftIcon";

import style from "./iframe.scss";
import { contextConsumers } from "Libs/ContextRudex";

const Iframe = ({ query }) => {
    alert(query);
    return (
        <LayoutView>
            <NavBar mode="light" icon={<LeftIcon />}>
                外链
            </NavBar>
            <ContentView>
                {query.outlink ? (
                    <iframe className={style.iframe} src={query.outlink} />
                ) : (
                    <div className={style.nourl}>外部链接不存在</div>
                )}
            </ContentView>
        </LayoutView>
    );
};

export default contextConsumers(state => ({
    query: state.query
}))(Iframe);
