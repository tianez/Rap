import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import styled from "styled-components";

import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";

const LoadingView = styled.div`
    text-align: center;
    line-height: 30rem;
`;

const Loading = () => {
    return <div>组件加载中...</div>;
};

const LoadingFarmeWork = () => {
    return (
        <LayoutView>
            <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => window.history.back()} />
            <ContentView>
                <LoadingView>
                    <Icon type={"loading"} size={"lg"} />
                </LoadingView>
            </ContentView>
        </LayoutView>
    );
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
            // return <LoadingFarmeWork />;
            return C ? <C {...this.props} /> : isRouter ? <LoadingFarmeWork /> : <Loading />;
        }
    };

export default asyncComponent;
