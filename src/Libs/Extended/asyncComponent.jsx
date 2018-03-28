import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";

import styles from "./asyncComponent.scss";

const Loading = () => {
    return <div>组件加载中...</div>;
};

const LoadingFarmeWork = () => {
    return (
        <Layout>
            <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => window.history.back()} />
            <Content>
                <div className={styles.content}>
                    <Icon type={"loading"} size={"lg"} />
                </div>
            </Content>
        </Layout>
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
            console.log(component);
            this.setState({
                component: component
            });
        }
        render() {
            const C = this.state.component;
            return <LoadingFarmeWork />;
            return C ? <C {...this.props} /> : isRouter ? <LoadingFarmeWork /> : <Loading />;
        }
    };

export default asyncComponent;
