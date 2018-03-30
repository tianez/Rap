import React, { Component } from "react";
import { Steps, WingBlank } from "antd-mobile";
const Step = Steps.Step;

import Time from "./Time";

import styles from "./ApprovedSteps.scss";

export default class ApprovedSteps extends Component {
    render() {
        let { bul, workflowVo } = this.props;
        let { approvers } = workflowVo;
        let approverIndex = approvers.findIndex(d => {
            return d.approveState == 1;
        });
        let currentStep = approverIndex + 1;
        if (approverIndex == -1) {
            currentStep = approvers.length + 1;
        }
        return (
            <div className={styles.steps}>
                <WingBlank>
                    <Steps current={currentStep}>
                        <Step
                            title={
                                <div className={styles.title}>
                                    <span className={styles.username}>{bul.publisherName}</span>
                                    <span className={styles.action}>发起申请</span>
                                    <span className={styles.time}>{bul.writeTime}</span>
                                </div>
                            }
                            icon={
                                <span className={styles.stepsicon}>
                                    {bul.publisherName && bul.publisherName.slice(0)}
                                </span>
                            }
                        />
                        {approvers.map((approver, index) => {
                            return (
                                <Step
                                    key={index}
                                    title={
                                        <div className={styles.title}>
                                            <span className={styles.username}>{approver.approverName}</span>
                                            <span
                                                className={
                                                    approver.approveState == 1 ? styles.actionwait : styles.actionagree
                                                }
                                            >
                                                {approver.approveStateName}
                                            </span>
                                            <span className={styles.time}>{approver.approveTime}</span>
                                        </div>
                                    }
                                    description={<div className={styles.description}>{approver.approveOpinion}</div>}
                                    icon={<span className={styles.stepsicon}>{approver.approverName.slice(0)}</span>}
                                />
                            );
                        })}
                    </Steps>
                </WingBlank>
            </div>
        );
    }
}
