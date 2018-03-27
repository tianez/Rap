import React, { Component } from "react";
import { Form } from "antd";
const { Item } = Form;

import styles from "./Member.scss";
import MemberModal from "Components/MemberModal/MemberModal";

import { contextConsumers } from "Libs/ContextRudex";
import reqUserList from "Hoc/ReqUserList";
@contextConsumers(context => ({
    userList: context.getIn(["userList", localStorage.orgId])
}))
@reqUserList("userList")
export default class Member extends Component {
    state = {
        visible: false
    };
    handleShowModal = () => {
        this.setState({
            visible: true
        });
    };
    handleHideModal = () => {
        this.setState({
            visible: false
        });
    };
    handleRemoveItem = e => {
        let { name, value, userList, onChange } = this.props;
        let id = e.target.dataset.id;
        value = value.filter(d => {
            return d != id;
        });
        let selectItems = [];
        let items = userList.filter(user => {
            return value.indexOf(user.userId) > -1;
        });
        value.map(d => {
            let i = items.filter(item => {
                return item.userId == d;
            });
            selectItems = selectItems.concat(i);
        });
        onChange(name, value, selectItems);
    };
    handleChangeItem = (data, userdetails) => {
        let { name, onChange } = this.props;
        onChange(name, data, userdetails);
        this.setState({
            visible: false
        });
    };
    render() {
        let { title, value, repeat, userList, ...rest } = this.props;
        let { visible } = this.state;
        let selectItems = $arr;
        if (userList && value) {
            let items = userList.filter(user => {
                return value.indexOf(user.userId) > -1;
            });
            value.map(d => {
                let i = items.filter(item => {
                    return item.userId == d;
                });
                selectItems = selectItems.concat(i);
            });
        }
        return (
            <Item label={title}>
                {selectItems.map((d, index) => {
                    return [
                        <div
                            key={index}
                            data-id={d.userId}
                            onClick={this.handleRemoveItem}
                            className={styles.selectItem}
                        >
                            {d.personname}
                        </div>,
                        repeat && (
                            <div className={styles.selectjt} key={"d" + index}>
                                <i className={"iconfont icon-iconfontjiantou"} />
                            </div>
                        )
                    ];
                })}
                <div className={styles.select} onClick={this.handleShowModal}>
                    ＋
                </div>
                {visible && (
                    <MemberModal
                        multiple={!repeat}
                        selectedRowKeys={value}
                        onChange={this.handleChangeItem}
                        onCancel={this.handleHideModal}
                    />
                )}
            </Item>
        );
    }
}
