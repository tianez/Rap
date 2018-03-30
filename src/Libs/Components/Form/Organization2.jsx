import React, { Component } from "react";

import { List, Toast } from "antd-mobile";
const Item = List.Item;

import OrganizationModal from "Components/Organization/OrganizationModal";

import styles from "./Departments.scss";

import { fromJS } from "immutable";
const ObInit = fromJS([]);
const jsInit = fromJS({});

import { connect } from "react-redux";
import reqUserList from "Action/reqUserList";
import handleChange from "./handleChange";

@connect(state => ({
    inituserlist: state.getIn(["userlist", localStorage.organizationId]) || ObInit
}))
@reqUserList
@handleChange
export default class Organization extends Component {
    static defaultProps = {
        value: [],
        repeat: false,
        step: true,
        multiple: false
    };
    constructor(props) {
        super(props);
    }
    handleChange = data => {
        let { repeat, value, onChange, multiple, inituserlist } = this.props;
        // console.log(data);
        if (multiple) {
            let users = inituserlist.filter(d => {
                return data.indexOf(d.get("userId")) > -1;
            });
            console.log(users.toJS());
            users = users.toJS();
            users = users.map(d => {
                return { ...d, isChecked: true };
            });
            return onChange && onChange(users);
        }
        data = data.toJS();
        value = [].concat(value);
        if (repeat) {
            value.push(data.userId);
            onChange && onChange(value);
            return;
        }
        let index = value.findIndex(d => {
            return d.userId == data.userId;
        });
        if (index == -1) {
            value.push(data.userId);
            onChange && onChange(value);
            return;
        }
        Toast.info("已经添加", 2);
    };

    handleDelete = index => {
        let { value, onChange } = this.props;
        value = [].concat(value);
        // index = parseInt(index)
        value.splice(index, 1);
        onChange && onChange(value);
    };
    render() {
        let { title, name, value, rules, step, tip, multiple, inituserlist } = this.props;
        let selecteditems = inituserlist
            ? value.map(userid => {
                  let users = inituserlist.filter(dep => {
                      return dep.get("userId") == userid;
                  });
                  return users.get(0) || jsInit;
              })
            : ObInit;
        return (
            <div className={styles.departments}>
                <div className={styles.title}>
                    {title}
                    {tip && <span className={styles.tip}>{tip}</span>}{" "}
                </div>
                <div>
                    {selecteditems.map((d, index) => {
                        return (
                            <div key={index} className={styles.steps}>
                                <div className={styles.userdetail} onClick={this.handleDelete.bind(null, index)}>
                                    <div className={styles.avatar}>{d.get("personname").slice(-2)}</div>
                                    <div className={styles.username}>{d.get("personname")}</div>
                                </div>
                                {step && <Steps />}
                            </div>
                        );
                    })}
                    <div className={styles.steps}>
                        <OrganizationModal
                            multiple={multiple}
                            selected={value}
                            onSelected={this.handleChange}
                            className={styles.addBtn}
                        >
                            +
                        </OrganizationModal>
                        <div className={styles.username}>&nbsp;</div>
                    </div>
                </div>
            </div>
        );
    }
}

const Steps = () => {
    return (
        <div className={styles.step}>
            <div className={"iconfont icon-iconfontjiantou " + styles.iconfont} />
            <div className={styles.username}>&nbsp;</div>
        </div>
    );
};
