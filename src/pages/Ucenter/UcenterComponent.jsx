import React, { Component } from "react";
import { List, WhiteSpace } from "antd-mobile";
const Item = List.Item;

import styles from "./Ucenter.scss";
export default class UcenterComponent extends Component {
    handleLink = url => {
        this.props.history.push(url);
    };
    render() {
        return (
            <div>
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
                <WhiteSpace />
                <List>
                    <Item
                        className={styles.item}
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={() => {}}
                    >
                        钱包
                    </Item>
                    <Item
                        thumb={
                            <i
                                className="iconfont icon-gerenzhongxin"
                                style={{ fontSize: "22px", color: "rgb(51, 163, 244)" }}
                            />
                        }
                    >
                        设置
                    </Item>
                    <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal">
                        设置
                    </Item>
                    <Item
                        className={styles.item}
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={() => this.handleLink("/qrcode")}
                    >
                        下载
                    </Item>
                </List>
                <WhiteSpace />
                <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png">设置</Item>
            </div>
        );
    }
}
