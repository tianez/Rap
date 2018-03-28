import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import { withRouter } from "react-router";
import { contextConsumers } from "Libs/ContextRudex";

@contextConsumers(state => ({
    isInitCloseUrl: state.isInitCloseUrl
}))
@withRouter
class LeftIcons extends Component {
    render() {
        let { ishome = false, history, isInitCloseUrl } = this.props;
        let isInitClose = history.location.pathname == isInitCloseUrl;
        return [
            !isInitClose &&
                !ishome && <Icon key={"back"} type="left" size="lg" onClick={() => window.history.back()} />,
            YSSJ.isApp && isInitClose && <Icon key={"close"} type="cross" size="lg" onClick={() => YSSJ.close()} />
        ];
    }
}

export default LeftIcons;
