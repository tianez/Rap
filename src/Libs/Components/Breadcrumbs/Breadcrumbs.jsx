import React, { Component } from "react";
import { List, Icon } from "antd-mobile";
const Item = List.Item;

import styles from "./Breadcrumbs.scss";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    orgInfo: state.orgInfo
}))
export default class Breadcrumbs extends Component {
    render() {
        let { breadcrumbs, orgInfo, onChangeBreadcrumbs } = this.props;
        if (!breadcrumbs) {
            return null;
        }
        let length = breadcrumbs.length;
        return (
            <List>
                <Item>
                    <span className={styles.sp}>
                        <span className={styles.a} onClick={() => onChangeBreadcrumbs(0)}>
                            {orgInfo && (orgInfo.fullname || orgInfo.orgName)}
                        </span>
                        {length > 0 && <Icon type="right" className={styles.rightArrow} />}
                    </span>
                    {breadcrumbs.map((d, index) => {
                        if (length == index + 1) {
                            return (
                                <span key={d.id} className={styles.s}>
                                    {d.name}
                                </span>
                            );
                        }
                        return (
                            <span key={d.id} className={styles.sp}>
                                <span className={styles.a} onClick={() => onChangeBreadcrumbs(index + 1)}>
                                    {d.name}
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
