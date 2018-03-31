import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { NavBar, List, Toast, InputItem, WhiteSpace, Icon } from "antd-mobile";
const Item = List.Item;
import LeftIcon from "Components/Layout/LeftIcon";
import OrganizationComponents from "Components/Organization/OrganizationComponents";
import styles from "./SelectUserCpt.scss";

import { contextConsumers } from "Libs/ContextRudex";
import reqUsersAction from "Hoc/reqUsersAction";

@contextConsumers(state => ({
    query: state.query,
    userlists: state.getIn(["userList", localStorage.organizationId])
}))
@withRouter
export default class SelectUserCpt extends Component {
    static defaultProps = {
        step: false,
        single: false, //是否只能选择一个,为true时 multiple=true 无效
        multiple: true,
        value: $arr
    };
    componentDidMount() {
        let { userlists } = this.props;
        if (!userlists) {
            this.props.dispatch.callBack(reqUsersAction);
        }
    }
    handleShowOrgCpt = () => {
        let { match, history, name } = this.props;
        history.push(match.url + "?" + name + "=true");
    };
    handleUserListClick = data => {
        let { name, value, onChange, single } = this.props;
        if (single) {
            onChange(name, [data.userId]);
            window.history.back();
            return;
        }
        let length = value.length;
        if (length > 0 && value[length - 1] == data.userId) {
            return Toast.info("该人员与前一人员是同一人");
        }
        value = value.concat([data.userId]);
        onChange(name, value);
        window.history.back();
    };

    handleSelect = data => {
        let { name, onChange } = this.props;
        onChange(name, data);
        window.history.back();
    };
    handleDelItem = e => {
        let { name, value, onChange } = this.props;
        let index = e.target.dataset.index;
        value.splice(index, 1);
        onChange(name, value);
    };

    render() {
        let { query, userlists = $arr, title, name, value, single, multiple, step } = this.props;
        multiple = !single && multiple;
        let selecteditems = value.map(d => {
            return userlists.find(user => {
                return user.userId == d;
            });
        });
        return (
            <List>
                <Item>
                    {title}({selecteditems.length}人)
                </Item>
                <div className={styles.steps}>
                    {selecteditems.map((d, k) => {
                        return [
                            <div key={k} className={styles.avatar} data-index={k} onClick={this.handleDelItem}>
                                {d.personname}
                            </div>,
                            step && <Steps />
                        ];
                    })}
                    <div className={styles.addBtn} onClick={this.handleShowOrgCpt}>
                        +
                    </div>
                </div>
                {query[name] && (
                    <UserCpt
                        selectedKeys={value}
                        multiple={multiple}
                        onClickUser={this.handleUserListClick}
                        onSelect={this.handleSelect}
                    />
                )}
            </List>
        );
    }
}

const Steps = () => {
    return (
        <div className={styles.iconfont}>
            <i className={"iconfont icon-iconfontjiantou "} />
        </div>
    );
};

const UserCpt = ({ onClickUser, onSelect, multiple, selectedKeys }) => {
    return (
        <OrganizationComponents onClickUser={onClickUser} selectedKeys={selectedKeys} multiple={multiple}>
            {(selectedKeys, selectedRows) => {
                return (
                    <NavBar
                        mode="light"
                        icon={<LeftIcon />}
                        rightContent={<div onClick={() => onSelect(selectedKeys, selectedRows)}>确定</div>}
                    >
                        选择人员
                    </NavBar>
                );
            }}
        </OrganizationComponents>
    );
};
