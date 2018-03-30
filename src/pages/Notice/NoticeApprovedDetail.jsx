/**
 * 公告审批
 */
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { contextConsumers } from "Libs/ContextRudex";

import { NavBar, Icon, Toast } from "antd-mobile";

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";

import GetQueryString from "Utils/GetQueryString";

import ApprovedContent from "./Components/ApprovedContent";
import ApprovedSteps from "./Components/ApprovedSteps";
import ApprovedUser from "./Components/ApprovedUser";
import Footer from "./Components/Footer";

import ApprovedAttitude from "./ApprovedAttitude";

@contextConsumers(state => ({
    ApprovedDetailReolad: state.getIn(["init", "ApprovedDetailReolad"]) || false
}))
export default class NoticeApprovedDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        };
    }
    componentWillMount() {
        this.reqData();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.ApprovedDetailReolad) {
            this.reqData();
        }
    }
    reqData = async () => {
        let { match } = this.props;
        let url = "bulletinInformation/getOneBulletin";
        Toast.loading("数据加载中，请稍后...", 0);
        let res = await Request(url, {
            params: {
                userId: localStorage.userId,
                bulletinId: match.params.id,
                orgId: localStorage.organizationId
            }
        });
        if (res.success === true) {
            console.log(res);
            Toast.hide();
            this.setState({
                detail: res.data
            });
        } else {
            Toast.fail(res.message);
        }
    };
    render() {
        let { location, match } = this.props;
        let { workflowVo, bul } = this.state.detail;
        let workflowState = workflowVo && workflowVo.workflowState;
        return (
            <Layout>
                <NavBar mode="light" icon={<Icon type="left" size="lg" />} onLeftClick={() => window.history.back()}>
                    公告审批
                </NavBar>
                <Content>
                    {bul && <ApprovedUser bul={bul} />}
                    {bul && <ApprovedContent content={bul} workflowState={workflowState} />}
                    {workflowVo && <ApprovedSteps workflowVo={workflowVo} bul={bul} />}
                </Content>
                {workflowVo && <Footer workflowVo={workflowVo} bul={bul} />}
                <Switch location={location}>
                    <Route path={match.url + "/attitude"} exact component={ApprovedAttitude} />
                </Switch>
            </Layout>
        );
    }
}
