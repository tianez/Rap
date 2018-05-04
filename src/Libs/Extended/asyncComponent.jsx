import React, { Component } from "react";

import LoadingFarmeWork from "Components/Layout/LoadingFarmeWork";

const Loading = () => {
    return <div>组件加载中...</div>;
};

const asyncComponent = (importComponent, isRouter = false) =>
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            };
        }
        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({
                component: component
            });
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : isRouter ? <LoadingFarmeWork /> : <Loading />;
        }
    };

export default asyncComponent;
