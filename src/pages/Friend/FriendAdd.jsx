import React, { Component } from "react";
import { List, InputItem, NavBar, Button, WhiteSpace } from "antd-mobile";
const Item = List.Item;

import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";
import LeftIcon from "Components/Layout/LeftIcon";

export default class FriendAdd extends Component {
    state = {
        username: ""
    };
    handleChange = value => {
        this.setState({
            username: value
        });
    };
    handleAdd = async () => {
        let { username } = this.state;
        let res = await db.friends.add({
            name: username,
            age: 25
        });
        if (res) {
            window.history.back();
        }
        console.log(res);
    };
    render() {
        return (
            <LayoutView>
                <NavBar mode="light" icon={<LeftIcon />}>
                    新增好友
                </NavBar>
                <ContentView>
                    <List renderHeader={() => "Form Validation"}>
                        <InputItem onChange={this.handleChange} placeholder="please input account">
                            用户名
                        </InputItem>
                        <Item>
                            <Button type="primary" size="small" inline onClick={this.handleAdd}>
                                Submit
                            </Button>
                        </Item>
                    </List>
                </ContentView>
            </LayoutView>
        );
    }
}
