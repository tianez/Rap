/**
 * 发起人
 */
import React, { Component } from "react";

import Avatar from "Components/Views/Avatar";
import Time from "Extended/Time/Time";

import styles from "./ApprovedUser.scss";

export default class ApprovedUser extends Component {
    render() {
        let { formRecordVo } = this.props;
        return (
            <div className={styles.user}>
                <Avatar>{formRecordVo.user.userName}</Avatar>
                <div className={styles.username}>
                    <div>{formRecordVo.user.userName}</div>
                    <div className={styles.time}>{formRecordVo.createTime}</div>
                </div>
            </div>
        );
    }
}
