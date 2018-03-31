/**
 * 审批底部操作栏
 */
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import OrganizationComponents from "Components/Organization/OrganizationComponents";
import LeftIcon from "Components/Layout/LeftIcon";

import styles from "./Footer.scss";
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    query: state.query
}))
@withRouter
export default class Footer extends Component {
    handleShowOrgCpt = () => {
        let { match, history } = this.props;
        history.push(match.url + "?user=true");
    };
    handleHandOver = data => {
        window.history.back();
        let { history, match, formRecordVo } = this.props;
        let { approvers } = this.props.workflowVo;
        let approverIndex = approvers.findIndex(d => {
            return d.approverId == localStorage.userId && d.approveState == 1;
        });
        let ApprovedId = approvers[approverIndex].approveId;
        history.push({
            pathname: match.url + "/attitude",
            state: {
                action: 2,
                ApprovedId: ApprovedId,
                user: data,
                recordId: formRecordVo.id
            }
        });
    };
    render() {
        let { formRecordVo, query } = this.props;
        let { approvers } = this.props.workflowVo;
        let approverIndex = approvers.findIndex(d => {
            return d.approverId == localStorage.userId && d.approveState == 1;
        });
        if (approverIndex == -1) {
            return null;
        }
        let { url, params } = this.props.match;
        let ApprovedId = approvers[approverIndex].approveId;
        return (
            <div className={styles.footer}>
                <Link
                    className={styles.action}
                    to={{
                        pathname: url + "/attitude",
                        state: { action: 0, ApprovedId, recordId: formRecordVo.id }
                    }}
                >
                    同意
                </Link>
                <Link
                    className={styles.action}
                    to={{
                        pathname: url + "/attitude",
                        state: { action: 1, ApprovedId, recordId: formRecordVo.id }
                    }}
                >
                    拒绝
                </Link>
                <div className={styles.action} onSelected={this.handleShowOrgCpt}>
                    转交
                </div>
                {query.user && (
                    <OrganizationComponents onClickUser={this.handleHandOver} multiple={false}>
                        {() => {
                            return (
                                <NavBar mode="light" icon={<LeftIcon />}>
                                    选择转交人员
                                </NavBar>
                            );
                        }}
                    </OrganizationComponents>
                )}
            </div>
        );
    }
}
