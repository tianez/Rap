import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, WhiteSpace } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;

import styles from "./Ucenter.scss";

export default class UcenterComponent extends Component {
    handleLink = url => {
        this.props.history.push(url);
    };
    render() {
        return (
            <div>
                <WhiteSpace />
                <List>
                    <Item
                        extra={<Link className={`iconfont icon-erweima ${styles.ewm}`} to="/qrcode" />}
                        thumb={<img className={styles.avatar} src="./public/images/avatar/0.jpg" />}
                    >
                        <div>找不到北</div>
                        <Brief>微信号：tianjuezhiyi</Brief>
                    </Item>
                </List>
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
                <List>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => this.handleLink("/video")}
                    >
                        视频播放
                    </Item>
                </List>
                <List>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => this.handleLink("/test")}
                    >
                        测试页面
                    </Item>
                </List>
                <WhiteSpace />
                <List>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => this.handleLink("/login")}
                    >
                        登录
                    </Item>
                </List>
            </div>
        );
    }
}
