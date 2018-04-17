import React, { Component } from "react";
import ReactDOM from "react-dom";

import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";
import LeftIcon from "Components/Layout/LeftIcon";

import style from "./iframe.scss";

const Iframe = props => {
    let { state = {} } = props.location;
    return ReactDOM.createPortal(
        <LayoutView>
            <NavBar mode="light" icon={<LeftIcon />}>
                外链
            </NavBar>
            <ContentView>
                {state.outlink ? (
                    <iframe className={style.iframe} src={state.outlink} />
                ) : (
                    <div className={style.nourl}>外部链接不存在</div>
                )}
            </ContentView>
        </LayoutView>,
        document.getElementById(rootDom)
    );
};

export default Iframe;
