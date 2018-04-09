/**
 * Context Api状态管理
 */
import React, { Component, createContext } from "react";
import seamless from "seamless-immutable";
import qs from "qs";

// import createHistory from "history/createHashHistory";
// const history = createHistory();
const ThemeContext = createContext();

export class Provider extends Component {
    constructor(props) {
        super(props);
        let initValue = props.value || {};
        initValue.query = {};
        this.state = {
            data: seamless(initValue)
        };
        this.dispatch = {
            callBack: this.callBack,
            set: this.setContext,
            setIn: this.setInContext
        };
        // window.dispatch = this.dispatch;
    }
    componentDidMount() {
        window.addEventListener("popstate", this.handleHashChange, false);
        setTimeout(() => {
            this.handleHashChange();
        }, 10);
    }
    callBack = (fbc, opt) => {
        let data = fbc(this.state.data, this.dispatch, opt);
        // this.setContext(data);
    };
    setContext = payload => {
        let data = this.state.data.merge(seamless(payload));
        this.setState({
            data
        });
    };
    setInContext = (payload, data) => {
        if (typeof payload == "string") {
            payload = [payload];
        }
        data = this.state.data.setIn(payload, seamless(data));
        this.setState({
            data
        });
    };
    handleHashChange = () => {
        let hash = window.location.href.split("?")[1];
        let query = {};
        if (hash) {
            query = qs.parse(hash);
        }
        this.setContext({ query });
    };
    render() {
        let { children } = this.props;
        let contextData = {
            context: this.state.data,
            dispatch: this.dispatch
        };
        return <ThemeContext.Provider value={contextData}>{children}</ThemeContext.Provider>;
    }
}

export const contextConsumer = Component =>
    class extends React.Component {
        render() {
            return (
                <ThemeContext.Consumer>
                    {context => {
                        return <Component {...this.props} {...context} />;
                    }}
                </ThemeContext.Consumer>
            );
        }
    };

export const contextConsumers = propFunc => Component =>
    class extends React.Component {
        render() {
            return (
                <ThemeContext.Consumer>
                    {context => {
                        let contextData = propFunc ? propFunc(context.context, this.props) : null;
                        return <Component {...this.props} {...contextData} dispatch={context.dispatch} />;
                    }}
                </ThemeContext.Consumer>
            );
        }
    };

export const Consumer = ThemeContext.Consumer;

export default { ...ThemeContext, Provider, contextConsumer, contextConsumers };
