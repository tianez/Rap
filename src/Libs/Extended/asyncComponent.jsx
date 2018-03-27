import React, { Component } from "react";

const Loading = () => {
    return <div>组件加载中...</div>;
};

const asyncComponent = importComponent =>
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
            return C ? <C {...this.props} /> : <Loading />;
        }
    };

export default asyncComponent;

// export default function asyncComponent(importComponent) {
//     class AsyncComponent extends Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 component: null,
//             };
//         }
//         async componentDidMount() {
//             const { default: component } = await importComponent();
//             this.setState({
//                 component: component
//             });
//         }
//         render() {
//             const C = this.state.component;
//             return C
//                 ? <C {...this.props} />
//                 : null;
//         }
//     }
//     return AsyncComponent;
// }
