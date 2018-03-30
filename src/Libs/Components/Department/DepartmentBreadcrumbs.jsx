import React, { Component } from "react";
import { List, Icon } from "antd-mobile";
const Item = List.Item;

import styles from "./DepartmentBreadcrumbs.scss";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    orgInfo: state.orgInfo
}))
export default class DepartmentBreadcrumbs extends Component {
    render() {
        let { breadcrumbs, onClick, orgInfo } = this.props;
        if (!breadcrumbs) {
            return null;
        }
        let length = breadcrumbs.length;
        return (
            <List>
                <Item>
                    <span className={styles.sp}>
                        <span className={styles.a} onClick={this.props.onChangeBreadcrumbs.bind(null, 0)}>
                            {orgInfo && (orgInfo.get("fullname") || orgInfo.get("orgName"))}
                        </span>
                        {size > 0 ? <Icon type="right" className={styles.rightArrow} /> : ""}
                    </span>
                    {breadcrumbs.map((d, index) => {
                        if (size == index + 1) {
                            return (
                                <span key={d.get("id")} className={styles.s}>
                                    {d.get("name")}
                                </span>
                            );
                        }
                        return (
                            <span key={d.get("id")} className={styles.sp}>
                                <span
                                    className={styles.a}
                                    onClick={this.props.onChangeBreadcrumbs.bind(null, index + 1)}
                                >
                                    {d.get("name")}
                                </span>
                                <Icon type="right" className={styles.rightArrow} />
                            </span>
                        );
                    })}
                </Item>
            </List>
        );
    }
}
