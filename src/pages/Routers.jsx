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

const InitRoutes = ({ redt }) => {
    console.log(redt);
    return (
        <HashRouter>
            <Switch>
                <Redirect path="/" exact to={redt} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/login2" component={Login2} />
            </Switch>
        </HashRouter>
    );
};

// InitRoutes;

@contextConsumers(state => ({
    init: state.init
}))
export default class Init extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.dispatch.set({
                init: "/home"
            });
        }, 3000);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.init) {
            return false;
        }
        return true;
    }
    render() {
        let { init } = this.props;
        if (!init) {
            return <LoadingFarmeWork>初始化中</LoadingFarmeWork>;
        }
        return <InitRoutes redt={this.props.init} />;
    }
}
