import React, { Component } from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";

import LoadingFarmeWork from "Components/Layout/LoadingFarmeWork";
import PrivateRoute from "Extended/privateRoute";
import asyncComponent from "Extended/asyncComponent";
// import Home from "./Home/Home";
const Home = asyncComponent(() => import("./Home/Home"), true);
const Login = asyncComponent(() => import("./Login/Login"), true);
const Login2 = asyncComponent(() => import("./Login2/Login2"), true);
import { contextConsumers } from "Libs/ContextRudex";

const RootRoutes = ({ redUrl }) => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/login2" component={Login2} />
                <Redirect path="/" exact to={redUrl} />
            </Switch>
        </HashRouter>
    );
};

@contextConsumers(state => ({
    init: state.init
}))
export default class InitRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            init: $obj,
            isfrist: true
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            init: nextProps.init
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.dispatch.setIn(["init", "redUrl"], "/home");
        }, 3000);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.init.redUrl == nextProps.init.redUrl) {
            return false;
        }
        return true;
    }
    componentDidUpdate() {
        let { init, isfrist } = this.state;
        if (isfrist) {
            this.setState({
                isfrist: false
            });
        } else {
            this.props.history.push(init.redUrl);
        }
    }
    render() {
        let { init } = this.props;
        if (!init.redUrl) {
            return <LoadingFarmeWork>初始化中</LoadingFarmeWork>;
        }
        return <RootRoutes redUrl={this.props.init.redUrl} />;
    }
}
