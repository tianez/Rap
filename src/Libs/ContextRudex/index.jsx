/**
 * Context Api状态管理
 */
import React, { Component, createContext } from "react";
import seamless from "seamless-immutable";
import qs from "qs";

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
        this.handleHashChange();
    }
    callBack = async fbc => {
        let data = await fbc(this.state.data);
        console.log(data);
        this.setContext(data);
    };
    setContext = payload => {
        console.log(payload);

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
            this.setContext({ query });
        }
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

class ComponentShouldUpdate extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    //     let { props, context } = this.props;
    //     if (nextProps.props != props) {
    //         return true;
    //     }
    //     let thiscontext = Object.keys(context).sort();
    //     let nextcontext = Object.keys(nextProps.context).sort();
    //     if (thiscontext.length != nextcontext.length) {
    //         return true;
    //     }
    //     let isd = thiscontext.filter((d, index) => {
    //         return d != nextcontext[index];
    //     });
    //     return true;
    // }
    render() {
        let { _component: Components, props, context, dispatch } = this.props;
        return <Components {...props} {...context} dispatch={dispatch} />;
    }
}

export const contextConsumers = propFunc => Component =>
    class extends React.Component {
        render() {
            return (
                <ThemeContext.Consumer>
                    {context => {
                        let contextData = propFunc ? propFunc(context.context) : null;
                        return (
                            <ComponentShouldUpdate
                                props={this.props}
                                context={contextData}
                                dispatch={context.dispatch}
                                _component={Component}
                            />
                        );
                    }}
                </ThemeContext.Consumer>
            );
        }
    };

export const Consumer = ThemeContext.Consumer;

export default { ...ThemeContext, Provider, contextConsumer, contextConsumers };
