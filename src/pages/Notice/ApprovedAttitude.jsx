/**
 * 审批处理
 */

import React, { Component } from "react";
import { NavBar, Icon, TextareaItem, WingBlank, WhiteSpace, Button, Toast } from "antd-mobile";
import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";

export default class ApprovedAttitude extends Component {
    constructor() {
        super();
        this.state = {
            approveOpinion: "",
            loading: false
        };
    }

    componentWillMount() {
        let { history, location } = this.props;
        let urls = location.pathname.split("/");
        urls = urls.slice(0, urls.length - 1).join("/");
        if (!location.state) {
            history.replace(urls);
        }
    }

    handleChange = approveOpinion => {
        this.setState({
            approveOpinion
        });
    };
    handleSubmit = () => {
        let { state } = this.props.location;
        let { action } = state;
        this.setState({
            loading: true
        });
        if (action == 0) {
            this.handleAgree(true);
        } else if (action == 1) {
            this.handleAgree(false);
        } else if (action == 2) {
            this.handleHandOver();
        }
    };
    /**
     * 同意/拒绝
     */
    handleAgree = async approveResult => {
        let { state } = this.props.location;
        let { approveOpinion } = this.state;
        let res = await Request.post("bulletinApproval/bulletinDoApprove", {
            circulationID: state.ApprovedId, //流转业务ID
            approveResult, //流转审批结果 true 同意 false 拒绝
            approveOpinion, //流转审批意见
            userId: localStorage.userId,
            recordId: state.recordId
        });
        this.setState({
            loading: false
        });
        if (res.success) {
            store.dispatch("init/save", { ApprovedDetailReolad: true });
            window.history.back();
        }
        Toast.info(res.message, 2);
    };
    /**
     * 转交
     */
    handleHandOver = async () => {
        let { state } = this.props.location;
        let { approveOpinion } = this.state;
        let res = await Request.post("bulletinApproval/bulletinApproveCare", {
            circulationID: state.ApprovedId, //流转业务ID
            uid: state.user.userId, // 转交目标对象
            approveOpinion,
            recordId: state.recordId
        });
        this.setState({
            loading: false
        });
        if (res.success) {
            store.dispatch("init/save", { ApprovedDetailReolad: true });
            window.history.back();
        }
        Toast.info(res.message, 2);
    };
    render() {
        let { state } = this.props.location;
        if (!state) {
            return null;
        }
        let title = "审批意见";
        if (state.action == 2) {
            title = "转交给" + state.user.personname;
        }
        let { loading } = this.state;
        return (
            <Layout>
                <NavBar mode="light" icon={<Icon type="left" size="lg" />} onLeftClick={() => window.history.back()}>
                    {title}
                </NavBar>
                <Content>
                    <WhiteSpace />
                    <TextareaItem placeholder="请输入" rows={5} count={100} onChange={this.handleChange} />
                    <WhiteSpace />
                    <WingBlank>
                        <Button type="primary" loading={loading} onClick={this.handleSubmit}>
                            提交
                        </Button>
                    </WingBlank>
                </Content>
            </Layout>
        );
    }
}
