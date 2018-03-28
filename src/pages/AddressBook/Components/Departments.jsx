import React, { Component } from "react";

import { List } from "antd-mobile";
const Item = List.Item;

import styles from "./Departments.scss";

import { contextConsumers } from "Libs/ContextRudex";
import reqDepartment from "Hoc/reqDepartment";

@contextConsumers(state => ({
    departments: state.Departments[localStorage.organizationId]
}))
@reqDepartment
export default class Departments extends Component {
    render() {
        let { departments, value = [] } = this.props;
        let selecteditems = departments
            ? departments.filter(dep => {
                  return value.indexOf(dep.get("id")) != -1;
              })
            : [];
        return (
            <Item
                extra={selecteditems.map(i => {
                    return (
                        <span key={i.get("id")} className={styles.item}>
                            {i.get("name")}
                        </span>
                    );
                })}
            >
                <span className={styles.title}>部门</span>
            </Item>
        );
    }
}
