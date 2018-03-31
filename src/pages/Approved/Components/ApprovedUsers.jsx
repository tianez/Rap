import React, { Component } from "react";

import styles from "./ApprovedUsers.scss";

export default class ApprovedUsers extends Component {
    render() {
        let { users } = this.props;
        return (
            <div className={styles.departments}>
                <div className={styles.title}>抄送人</div>
                <div>
                    {users.map((d, index) => {
                        return (
                            <div key={d.userId} className={styles.avatar}>
                                {d.userName}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
