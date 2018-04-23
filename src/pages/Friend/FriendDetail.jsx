import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { List, NavBar, WhiteSpace } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;
import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";
import LeftIcon from "Components/Layout/LeftIcon";

import styles from "./Friend.scss";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    friends: state.friends
}))
export default class FriendDetail extends Component {
    render() {
        let { friends = $arr, match } = this.props;
        let data = friends.find(d => {
            return d.id == match.params.id;
        });
        if (!data) {
            return <Redirect to="/friend" />;
        }
        return (
            <LayoutView>
                <NavBar mode="light" icon={<LeftIcon />} />
                <ContentView>
                    <WhiteSpace />
                    <List>
                        <Item
                            extra={<Link className={`iconfont icon-erweima ${styles.ewm}`} to="/qrcode" />}
                            thumb={<img className={styles.avatar} src="./public/images/avatar/0.jpg" />}
                        >
                            <div>{data.username}</div>
                            <Brief>微信号：{data.id}</Brief>
                        </Item>
                    </List>
                    <WhiteSpace />
                    <List>
                        <Item onClick={() => {}}>设置备注和标签</Item>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                            onClick={() => this.handleLink("/qrcode")}
                        >
                            下载
                        </Item>
                    </List>
                </ContentView>
            </LayoutView>
        );
    }
}
