import React, { Component } from "react";
import { contextConsumers } from "Libs/ContextRudex";

import asyncComponent from "Extended/asyncComponent";
import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
// import Notice from "./Components/Notice";
// import Lists from "./Components/Lists";

// const Banner = asyncComponent(() => import("./Components/Banner"));
const Notice = asyncComponent(() => import("./Components/Notice"));
const Lists = asyncComponent(() => import("./Components/Lists"));

import styles from "./Home.scss";

@contextConsumers(state => ({
    orgInfo: state.orgInfo,
    orgId: state.orgId,
    homeScrollTop: state.homeScrollTop || 0
}))
class Home extends Component {
    constructor() {
        super();
    }
    async componentWillMount() {
        let { orgInfo, orgId } = this.props;
        this.reqOrgInfo(orgInfo, orgId);
    }
    componentDidMount() {
        setTimeout(() => {
            this.homeScrollTop.scrollTop = this.props.homeScrollTop;
        }, 0);
    }
    componentWillReceiveProps(nextProps) {
        let { orgInfo, orgId } = nextProps;
        if (orgId != this.props.orgId) {
            this.reqOrgInfo(orgInfo, orgId);
        }
    }
    reqOrgInfo = async (orgInfo, orgId) => {
        if (orgInfo || !orgId) {
            return;
        }
        let res = await Request("orginfo/selectOrginfoById", {
            params: {
                id: orgId
            }
        });
        if (res.success) {
            store.dispatch("init/save", {
                orgInfo: res.data.orgInfo
            });
        }
    };
    /**
     * 监听事件，返回组件滚动信息到父级组件
     */
    handleScroll = e => {
        let endTime = new Date();
        if (this.startTime && endTime - this.startTime < 50) {
            return;
        }
        this.startTime = endTime;
        this.props.dispatch.set({ homeScrollTop: e.target.scrollTop });
    };
    render() {
        return (
            <Layout>
                <Header />
                <Content>
                    <div
                        ref={ele => (this.homeScrollTop = ele)}
                        className={styles.scrollDiv}
                        onScroll={this.handleScroll}
                    >
                        <Banner />
                        <Notice />
                        <Lists />
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default Home;
