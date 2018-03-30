/**
 * 发起人
 */
import React, { Component } from "react";

import Avatar from "Components/Views/Avatar";
import styles from "./ApprovedUser.scss";

export default class ApprovedUser extends Component {
    render() {
        let { bul } = this.props;
        return (
            <div className={styles.user}>
                <Avatar>{bul.publisherName}</Avatar>
                <div className={styles.username}>
                    <div>{bul.publisherName}</div>
                    <div className={styles.time}>{bul.writeTime}</div>
                </div>
            </div>
        );
    }
}
