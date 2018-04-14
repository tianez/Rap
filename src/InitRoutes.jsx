import React, { Component } from "react";
import LoadingFarmeWork from "Components/Layout/LoadingFarmeWork";
import Loading from "Components/Layout/Loading";
import RootRoutes from "./pages/RootRoutes";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    redUrl: state.getIn(["init", "redUrl"])
}))
export default class InitRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: true,
            loading: true,
            error: false
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            redUrl: nextProps.redUrl,
            isRedirect: prevState.redUrl != nextProps.redUrl
        };
    }
    componentDidMount() {
        this.getInit();
    }
    componentDidUpdate() {
        let { redUrl, isRedirect } = this.state;
        if (isRedirect) {
            this.props.history.push(redUrl);
        }
    }
    getInit = () => {
        let init = localStorage.init;
        if (init) {
            init = JSON.parse(init);
            this.props.dispatch.set({ init });
        } else {
            init = {};
        }
        this.setState({
            loading: true,
            error: false
        });
        setTimeout(() => {
            this.setState({
                loading: false,
                error: true
            });
            init.redUrl = "/login";
            localStorage.init = JSON.stringify(init);
            this.props.dispatch.set({ init });
        }, 3000);
    };
    render() {
        let { redUrl } = this.props;
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
        return <RootRoutes redUrl={this.props.redUrl} />;
    }
}
