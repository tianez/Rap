import React, { Component } from "react";
import { NavBar, List, Icon } from "antd-mobile";
const Item = List.Item;

import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";

// import Departments from "./Components/Departments";

export default class AddressBookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }
    async componentWillMount() {
        let { match } = this.props;
        let user = await Request("relation/getUserdet", {
            params: {
                userId: match.params.userId
            }
        });
        if (user.success) {
            this.setState({
                user: user.data.detail
            });
        }
    }
    render() {
        let { user } = this.state;
        let field = {
            title: "部门",
            name: "depArr",
            type: "departments",
            multiple: true,
            placeholder: "选填"
        };
        return (
            <Layout>
                <NavBar mode="light" icon={<LeftIcon />}>
                    {user.personname || "通讯录"}
                </NavBar>
                <Content>
                    <List renderHeader={() => "基本信息"}>
                        <Item extra={user.personname}>姓名</Item>
                        {/* <Item extra={<a href={"tel:" + user.phonenumber1} style={{ color: '#3692fa' }}>{user.phonenumber1}</a>}>电话</Item> */}
                        <Item extra={user.jobnumber}>工号</Item>
                        {/* <Departments value={user.depArr} /> */}
                    </List>
                    <List renderHeader={() => "其他信息"}>
                        <Item extra={user.userStatusShow}>用户状态</Item>
                    </List>
                </Content>
            </Layout>
        );
    }
}
