import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";

import OrganizationComponents from "Components/Organization/OrganizationComponents";
import styles from "./AddressBookIndex.scss";

import LeftIcon from "Components/Layout/LeftIcon";

export default class AddressBookIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    handleUserListClick = data => {
        let { history, match } = this.props;
        history.push(match.url + "/" + data.userId);
    };
    handleSlect = (selectedKeys, selectedUsers) => {
        console.log(selectedKeys);
        console.log(selectedUsers);
    };
    render() {
        return (
            <OrganizationComponents onClickUser={this.handleUserListClick}>
                {(selectedKeys, selectedUsers) => {
                    return (
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" />}
                            onLeftClick={() => this.handleSlect(selectedKeys, selectedUsers)}
                        >
                            通讯录
                        </NavBar>
                    );
                }}
            </OrganizationComponents>
        );
    }
}
