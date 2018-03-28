import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List } from "antd-mobile";
const Item = List.Item;

import styles from "./UserList.scss";
import Avatar from "Components/Views/Avatar";
const UserList = ({ userlist }) => {
    return userlist ? (
        <List>
            {userlist.map(m => {
                return (
                    <Item arrow="horizontal" key={m.userId}>
                        <div className={styles.link}>
                            <Avatar theme={{ width: "0.4rem" }}>{m.personname}</Avatar>
                            <div className={styles.detail}>
                                <div className={styles.name}>{m.personname}</div>
                                {m.office && <div className={styles.office}>{m.office}</div>}
                            </div>
                        </div>
                    </Item>
                );
            })}
        </List>
    ) : (
        <List>
            <Item>该部门下还没有人员</Item>
        </List>
    );
};

export default UserList;
