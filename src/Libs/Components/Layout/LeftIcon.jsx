import React, { Component } from "react";
import { Icon } from "antd-mobile";

class LeftIcons extends Component {
    handleBack = () => {
        window.history.back();
    };
    render() {
        return <Icon key={"back"} type="left" onClick={this.handleBack} />;
    }
}

export default LeftIcons;
