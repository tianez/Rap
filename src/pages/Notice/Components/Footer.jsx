/**
 * 审批底部操作栏
 */
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import OrganizationModal from "Components/Organization/OrganizationModal";

import styles from "./Footer.scss";

class Footer extends Component {
    handleHandOver = data => {
        let { history, match } = this.props;
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
                user: data.toJS(),
                recordId: match.params.id
            }
        });
    };
    render() {
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
                        state: { action: 0, ApprovedId, recordId: params.id }
                    }}
                >
                    同意
                </Link>
                <Link
                    className={styles.action}
                    to={{
                        pathname: url + "/attitude",
                        state: { action: 1, ApprovedId, recordId: params.id }
                    }}
                >
                    拒绝
                </Link>
                <OrganizationModal className={styles.action} onSelected={this.handleHandOver} title={"选择转交人员"}>
                    转交
                </OrganizationModal>
            </div>
        );
    }
}

export default withRouter(Footer);
