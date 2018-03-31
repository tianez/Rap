import React, { Component } from 'react'

import ListTypes from './ListType/ListTypes';

import styles from './ApprovedContent.scss';



export default class ApprovedContent extends Component {
    render() {
        let { content, workflowState } = this.props
        return <div className={styles.ApprovedContent}>
            <WorkflowState workflowState={workflowState} />
            <ListTypes data={content.filedValues} />
        </div>
    }
}

const WorkflowState = ({ workflowState }) => {
    if (!workflowState) {
        return null
    }
    let icon = 'iconfont '
    switch (workflowState * 1) {
        case 1: //审批中
            icon += 'icon-shenpizhong2 '
            break;
        case 2: // 审批通过
            icon += 'icon-tongguo '
            break;
        case 3: //审批拒绝
            icon += 'icon-jujue '
            break;
        default:
            break;
    }
    return <div className={icon + styles.workflowState}></div>
}

