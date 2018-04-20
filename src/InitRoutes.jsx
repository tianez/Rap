import React, { Component } from "react";
import LoadingFarmeWork from "Components/Layout/LoadingFarmeWork";
import Loading from "Components/Layout/Loading";
import RootRoutes from "./pages/RootRoutes";

let init = {
    redUrl: "/home",
    footerTabs: [
        {
            title: "首页",
            key: "home",
            icon: "iconfont icon-shouye",
            badge: 1
        },
        {
            title: "新闻",
            key: "news",
            icon: "iconfont icon-news"
        },
        {
            title: "服务",
            key: "service",
            icon: "iconfont icon-gerenzhongxin"
        },
        {
            title: "好友",
            key: "friend",
            icon: "iconfont icon-tongxun",
            dot: true
        },
        {
            title: "个人中心",
            key: "ucenter",
            icon: "iconfont icon-gerenzhongxin"
        }
    ]
};

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    redUrl: state.getIn(["init", "redUrl"]),
    isChangeChannal: state.isChangeChannal
}))
export default class InitRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false
        };
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {
    //         footerTabs: nextProps.footerTabs
    //     };
    // }
    componentDidMount() {
        window.addEventListener("offline", this.handleChangeOnline);
        window.addEventListener("online", this.handleChangeOnline);
        navigator.connection.addEventListener("typechange", this.handleChangeConnection);
        this.handleChangeConnection();
        // this.getCurrentPosition();
        this.getInit();
    }
    componentDidUpdate() {
        let { redUrl, isChangeChannal } = this.props;
        if (redUrl && isChangeChannal) {
            this.props.history.push(redUrl);
            this.props.dispatch.set({ isChangeChannal: false });
        }
    }
    handleChangeOnline = () => {
        this.props.dispatch.set({ onLine: navigator.onLine });
    };
    handleChangeConnection = () => {
        let { connection } = navigator;
        let connectionType = "none";
        if (connection.type == "wifi") {
            connectionType = "wifi";
        } else if (connection.type == "cellular") {
            if (connection.effectiveType) {
                connectionType = connection.effectiveType;
            } else {
                connectionType = "cellular";
            }
        }
        this.props.dispatch.set({ connectionType });
    };
    getCurrentPosition = () => {
        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition(this.success, this.error, options);
    };
    success = pos => {
        let crd = pos.coords;
        console.log("Your current position is:");
        console.log("Latitude : " + crd.latitude);
        console.log("Longitude: " + crd.longitude);
        console.log("More or less " + crd.accuracy + " meters.");
    };
    error = err => {
        console.warn("ERROR(" + err.code + "): " + err.message);
    };
    getInit = () => {
        let { footerTabs } = this.props;
        this.setState({
            loading: true,
            error: false
        });
        setTimeout(() => {
            this.setState({
                loading: false,
                error: true
            });
            localStorage.init = JSON.stringify(init);
            this.props.dispatch.set({ init });
        }, 3000);
    };
    render() {
        let { redUrl, location } = this.props;
        let { error, loading } = this.state;
        if (!redUrl) {
            return (
                <LoadingFarmeWork>
                    <Loading
                        loading={loading}
                        loadingTitle="初始化中..."
                        error={error}
                        errorAction={<div onClick={this.getInit}>初始化失败，点击重试</div>}
                    />
                </LoadingFarmeWork>
            );
        }
        return <RootRoutes location={location} redUrl={redUrl} />;
    }
}
