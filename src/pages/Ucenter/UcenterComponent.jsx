import React, { Component } from "react";
import { List } from "antd-mobile";
const Item = List.Item;

import styles from "./Ucenter.scss";
export default class UcenterComponent extends Component {
    render() {
        return (
            <List>
                <Item extra={"extra content"}>Title</Item>
                <Item
                    className={styles.item}
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    arrow="horizontal"
                    onClick={() => {}}
                >
                    钱包
                </Item>
                <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal">
                    数据
                </Item>
            </List>
        );
    }
}
