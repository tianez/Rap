/**
 * 审批
 */
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { NavBar, Icon, Toast } from "antd-mobile";

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";

import GetQueryString from "Utils/GetQueryString";

import ApprovedContent from "./Components/ApprovedContent";
import ApprovedSteps from "./Components/ApprovedSteps";
import ApprovedUsers from "./Components/ApprovedUsers";
import ApprovedUser from "./Components/ApprovedUser";
import Footer from "./Components/Footer";

import ApprovedAttitude from "./ApprovedAttitude";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    ApprovedDetailReolad: state.getIn(["init", "ApprovedDetailReolad"]) || false
}))
export default class ApprovedDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        };
    }
    componentWillMount() {
        this.handleReqData();
        this.handleChangeStatus();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.ApprovedDetailReolad) {
            this.handleReqData();
        }
    }
    /**
     * 改变已读状态
     */
    handleChangeStatus = async () => {
        let { location, match } = this.props;
        let readState = GetQueryString(location.search, "readState");
        if (readState != "N") {
            return;
        }
        let res = await Request("cc/read", {
            method: "post",
            data: {
                businessId: match.params.ApprovedId,
                userId: localStorage.userId,
                orgId: localStorage.organizationId
            }
        });
    };
    handleReqData = async () => {
        let { match } = this.props;
        Toast.loading("数据加载中...", 0, "", false);
        this.props.dispatch.setIn(["init", "ApprovedDetailReolad"], false);
        let res = await Request("form/select", {
            params: {
                id: match.params.ApprovedId
            }
        });
        if (res.success) {
            this.setState({
                detail: res.data.formView
            });
            Toast.hide();
        } else {
            Toast.info(res.message, 2);
        }
    };
    render() {
        let { location, match } = this.props;
        let { formRecordVo, userVos, workflowVo } = this.state.detail;
        let workflowState = workflowVo && workflowVo.workflowState;
        let title = (formRecordVo && formRecordVo.form.formName) || "审批";
        return (
            <Layout>
                <NavBar mode="light" icon={<Icon type="left" size="lg" />} onLeftClick={() => window.history.back()}>
                    {title}
                </NavBar>
                <Content>
                    {formRecordVo && <ApprovedUser formRecordVo={formRecordVo} />}
                    {formRecordVo && <ApprovedContent content={formRecordVo} workflowState={workflowState} />}
                    {workflowVo && <ApprovedSteps formRecordVo={formRecordVo} workflowVo={workflowVo} />}
                    {userVos && <ApprovedUsers users={userVos} />}
                </Content>
                {workflowVo && <Footer workflowVo={workflowVo} formRecordVo={formRecordVo} />}
                <Switch location={location}>
                    <Route path={match.url + "/attitude"} exact component={ApprovedAttitude} />
                </Switch>
            </Layout>
        );
    }
}
