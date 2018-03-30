import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { NavBar, List, Toast, InputItem, WhiteSpace, Icon } from "antd-mobile";
const Item = List.Item;

import OrganizationComponents from "Components/Organization/OrganizationComponents";
import styles from "./SelectUserCpt.scss";

import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    query: state.query
}))
@withRouter
export default class SelectUserCpt extends Component {
    handleShowOrgCpt = () => {
        let { match, history } = this.props;
        history.push(match.url + "?showOrgCpt=true");
    };
    handleUserListClick = data => {
        console.log(data);
    };
    render() {
        let { query } = this.props;
        return (
            <List renderHeader={() => "审批人"}>
                <Item>
                    <div className={styles.steps}>
                        <div className={styles.addBtn} onClick={this.handleShowOrgCpt}>
                            +
                        </div>
                    </div>
                </Item>
                {query.showOrgCpt && <UserCpt onClickUser={this.handleUserListClick} />}
            </List>
        );
    }
}

const UserCpt = ({ onClickUser }) => {
    return (
        <OrganizationComponents onClickUser={onClickUser}>
            {(selectedKeys, selectedUsers) => {
                return (
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        // onLeftClick={() => this.handleSlect(selectedKeys, selectedUsers)}
                        onLeftClick={() => window.history.back()}
                    >
                        通讯录
                    </NavBar>
                );
            }}
        </OrganizationComponents>
    );
};
