import React, { Component } from "react";
import { List, NavBar, WhiteSpace } from "antd-mobile";
const Item = List.Item;
import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";
import LeftIcon from "Components/Layout/LeftIcon";
export default class Setting extends Component {
    render() {
        return (
            <LayoutView>
                <NavBar mode="light" icon={<LeftIcon />}>
                    设置
                </NavBar>
                <ContentView>
                    <WhiteSpace />
                    <List>
                        <Item arrow="horizontal" onClick={() => {}}>
                            隐私
                        </Item>
                        <Item arrow="horizontal" onClick={() => {}}>
                            通用
                        </Item>
                    </List>
                    <WhiteSpace />
                    <List>
                        <Item arrow="horizontal" onClick={() => {}}>
                            切换账号
                        </Item>
                        <Item arrow="horizontal" onClick={() => {}}>
                            退出
                        </Item>
                    </List>
                    <WhiteSpace />
                    <List>
                        <Item arrow="horizontal" onClick={() => {}}>
                            关于我们
                        </Item>
                        <Item arrow="horizontal" onClick={() => {}}>
                            帮助与反馈
                        </Item>
                    </List>
                </ContentView>
            </LayoutView>
        );
    }
}
