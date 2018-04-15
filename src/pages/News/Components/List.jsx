import React, { Component } from "react";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers((state, props) => ({
    data: state.getIn(["news", props.tab.id]) || $obj
}))
export default class List extends Component {
    componentDidMount() {
        let { tab, dispatch, data } = this.props;
        if (data.loaded) {
            return;
        }
        data = data.set("loaded", true);
        setTimeout(() => {
            dispatch.setIn(["news", tab.id], data);
        }, Math.random());
    }
    render() {
        let { tab, data } = this.props;
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    backgroundColor: "#fff"
                }}
            >
                <p>Content of {tab.title}</p>
            </div>
        );
    }
}
