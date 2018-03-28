/**
 * 部门列表模块
 */

import React, { Component } from "react";
import { List } from "antd-mobile";
const Item = List.Item;

import styles from "./DepList.scss";

export default class DepList extends Component {
    render() {
        let { deptlist, onClick } = this.props;
        return (
            <List key={"list"} style={{ marginTop: "6px" }}>
                {deptlist.map((list, index) => {
                    return (
                        <Item
                            key={list.id}
                            onClick={onClick.bind(null, list)}
                            arrow="horizontal"
                            extra={list.member.length == 0 ? "" : list.member.length}
                        >
                            <div>{list.name}</div>
                        </Item>
                    );
                })}
            </List>
        );
    }
}

const Extra = ({ list, onClick }) => {
    return (
        <span className={styles.extra} onClick={onClick && onClick.bind(null, list)}>
            <i className="iconfont icon-wodexiaji" />
            下级
        </span>
    );
};
