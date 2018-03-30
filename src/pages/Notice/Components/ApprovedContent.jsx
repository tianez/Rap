import React, { Component } from "react";

import styles from "./ApprovedContent.scss";

export default class ApprovedContent extends Component {
    render() {
        let { content, workflowState } = this.props;
        return (
            <div className={styles.ApprovedContent}>
                <WorkflowState workflowState={workflowState} />
                <div className={styles.title}>【公告标题】{content.title}</div>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html: content.content }} />
            </div>
        );
    }
}

const WorkflowState = ({ workflowState }) => {
    if (!workflowState) {
        return null;
    }
    let icon = "iconfont ";
    switch (workflowState * 1) {
        case 1: //审批中
            icon += "icon-shenpizhong2 ";
            break;
        case 2: // 审批通过
            icon += "icon-tongguo ";
            break;
        case 3: //审批拒绝
            icon += "icon-jujue ";
            break;
        default:
            break;
    }
    return <div className={icon + styles.workflowState} />;
};
