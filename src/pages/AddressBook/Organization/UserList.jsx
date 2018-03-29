import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List } from "antd-mobile";
const Item = List.Item;

import styles from "./UserList.scss";
import Avatar from "Components/Views/Avatar";
const UserList = ({ userlist, tip = "该部门下还没有人员", onClick, selectedKeys = [], multiple }) => {
    return (
        <List style={{ marginTop: "6px" }}>
            {userlist.length > 0 ? (
                userlist.map(m => {
                    if (multiple) {
                        return <MultipleItem data={m} key={m.userId} selectedKeys={selectedKeys} onClick={onClick} />;
                    }
                    return (
                        <Item arrow="horizontal" key={m.userId} onClick={() => onClick(m)}>
                            <div className={styles.link}>
                                <Avatar theme={{ width: "0.4rem" }}>{m.personname}</Avatar>
                                <div className={styles.detail}>
                                    <div className={styles.name}>{m.personname}</div>
                                    {m.office && <div className={styles.office}>{m.office}</div>}
                                </div>
                            </div>
                        </Item>
                    );
                })
            ) : (
                <Item>{tip}</Item>
            )}
        </List>
    );
};

export default UserList;

const MultipleItem = ({ data, selectedKeys, onClick }) => {
    let cls = styles.checkbox;
    if (selectedKeys.indexOf(data.userId) != -1) {
        cls = styles.checked;
    }
    return (
        <Item onClick={() => onClick(data)}>
            <div className={styles.link}>
                <span className={cls} />
                <Avatar theme={{ width: "0.4rem" }}>{data.personname}</Avatar>
                <div className={styles.detail}>
                    <div className={styles.name}>{data.personname}</div>
                </div>
            </div>
        </Item>
    );
};
