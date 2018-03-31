import React, { Component } from "react";

import { List } from "antd-mobile";
const Item = List.Item;

import styles from "./Departments.scss";

import reqDeptsAction from "Hoc/reqDeptsAction";
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    deptlist: state.getIn(["deptList", localStorage.organizationId])
}))
export default class Departments extends Component {
    componentDidMount() {
        let { deptlist } = this.props;
        if (!deptlist) {
            this.props.dispatch.callBack(reqDeptsAction);
        }
    }
    render() {
        let { deptlist = $arr, value = [] } = this.props;
        let selecteditems = deptlist.filter(dep => {
            return value.indexOf(dep.id) != -1;
        });
        return (
            <Item
                extra={selecteditems.map(i => {
                    return (
                        <span key={i.id} className={styles.item}>
                            {i.name}
                        </span>
                    );
                })}
            >
                <span className={styles.title}>部门</span>
            </Item>
        );
    }
}
