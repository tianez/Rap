/**
 * 部门列表模块
 */

import React, { Component } from "react";
import { List } from "antd-mobile";
const Item = List.Item;

import styles from "./DepList.scss";

export default class DepList extends Component {
    render() {
        let { deptlist, onClick, multiple, selectedDevs = [], selectedKeys, onSelectDep } = this.props;
        return deptlist.length > 0 ? (
            <List key={"list"} style={{ marginTop: "6px" }}>
                {deptlist.map((list, index) => {
                    if (multiple) {
                        return (
                            <MultipleDep
                                list={list}
                                key={list.id}
                                selectedKeys={selectedKeys}
                                selectedDevs={selectedDevs}
                                onClick={onClick}
                                onSelectDep={onSelectDep}
                            />
                        );
                    }
                    return (
                        <Item
                            key={list.id}
                            onClick={() => onClick(list)}
                            arrow="horizontal"
                            extra={list.member.length == 0 ? "" : list.member.length}
                        >
                            <div>{list.name}</div>
                        </Item>
                    );
                })}
            </List>
        ) : null;
    }
}

const MultipleDep = ({ list, selectedKeys, selectedDevs, onClick, onSelectDep }) => {
    let curlist = list.member.filter(user => {
        return selectedKeys.indexOf(user.userId) != -1;
    });
    let cls = styles.checkbox;
    if (selectedDevs[list.id] == 1) {
        cls = styles.checked;
    }
    if (curlist.length != 0 && curlist.length == list.member.length) {
        cls = styles.checkedall;
    }
    return (
        <Item extra={<Extra list={list} onClick={onClick} />}>
            <div onClick={() => onSelectDep(list)}>
                <span className={cls} />
                {list.name}({list.member.length}人)
            </div>
        </Item>
    );
};

const Extra = ({ list, onClick }) => {
    return (
        <span className={styles.extra} onClick={() => onClick(list)}>
            <i className="iconfont icon-wodexiaji" />
            下级
        </span>
    );
};
