import React, { Component } from "react";
import { List, InputItem, NavBar, Button, WhiteSpace } from "antd-mobile";
const Item = List.Item;

import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";
import LeftIcon from "Components/Layout/LeftIcon";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    friends: state.friends
}))
export default class FriendAdd extends Component {
    state = {
        username: ""
    };
    handleChange = value => {
        this.setState({
            username: value,
            loading: false
        });
    };
    handleAdd = async () => {
        let { username } = this.state;
        this.setState({
            loading: true
        });
        let res = await Apicloud.post("Friend", {
            username,
            userid: localStorage.userId,
            userinfo: {
                id: 123,
                sex: "woman"
            }
        });
        if (res.success) {
            let { friends = $arr } = this.props;
            friends = friends.concat(res.data);
            this.props.dispatch.set({
                friends
            });
            window.history.back();
        }
        this.setState({
            loading: false
        });
        // let res = await db.friends.add({
        //     name: username,
        //     age: 25
        // });
        // if (res) {
        //     window.history.back();
        // }
        console.log(res);
    };
    render() {
        let { loading } = this.state;
        return (
            <LayoutView>
                <NavBar mode="light" icon={<LeftIcon />}>
                    新增好友
                </NavBar>
                <ContentView>
                    <List renderHeader={() => "请输入要添加的好友姓名"}>
                        <InputItem onChange={this.handleChange} placeholder="请输入姓名">
                            用户名
                        </InputItem>
                        <Item>
                            <Button type="primary" loading={loading} onClick={this.handleAdd}>
                                提交
                            </Button>
                        </Item>
                    </List>
                </ContentView>
            </LayoutView>
        );
    }
}
