import React, { Component } from "react";
import { List, Card, WhiteSpace } from "antd-mobile";
const Item = List.Item;

import styles from "./Ucenter.scss";
export default class UcenterComponent extends Component {
    handleLink = url => {
        this.props.history.push(url);
    };
    render() {
        return (
            <div>
                <WhiteSpace />
                <Card full>
                    <Card.Header
                        title={
                            <div>
                                <div>This is title</div>
                                <div>This is title</div>
                            </div>
                        }
                        thumb={
                            <img src="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png" />
                        }
                        extra={<span>this is extra</span>}
                    />
                </Card>
                <WhiteSpace />
                <List>
                    <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" onClick={() => {}}>
                        钱包
                    </Item>
                    <Item thumb={<i className={`iconfont icon-gerenzhongxin ${styles.thumb}`} />}>设置</Item>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => this.handleLink("/qrcode")}
                    >
                        下载
                    </Item>
                </List>
                <WhiteSpace />
                <List>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => this.handleLink("/setting")}
                    >
                        设置
                    </Item>
                </List>
            </div>
        );
    }
}
