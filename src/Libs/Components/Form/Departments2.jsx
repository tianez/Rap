import React, { Component } from "react";

import { List } from "antd-mobile";
const Item = List.Item;

import DepartmentModal from "Components/Department/DepartmentModal";

import styles from "./Departments.scss";

import { connect } from "react-redux";
import reqDepartment from "Action/reqDepartment";
import handleChange from "./handleChange";

@connect(state => ({
    departments: state.getIn(["Departments", localStorage.organizationId])
}))
@reqDepartment
@handleChange
export default class Departments extends Component {
    static defaultProps = {
        multiple: false
    };
    constructor(props) {
        super(props);
        let value = this.initValue(props);
        this.state = {
            value: value
        };
    }
    initValue = ({ value, multiple }) => {
        let res = value ? [value] : [];
        let isObj = value && typeof value == "object" && typeof value.length == "number";
        if (multiple) {
            if (isObj) {
                res = value;
            }
        } else if (isObj && value.length > 0) {
            res[0] = value[0];
        }
        return res;
    };
    componentWillReceiveProps(nextProps) {
        let { value } = nextProps;
        if (this.props.value != value) {
            value = this.initValue(nextProps);
            this.setState({ value });
        }
    }
    handleSelected = data => {
        let { multiple, onChange } = this.props;
        if (!onChange) {
            return;
        }
        if (multiple) {
            onChange(data);
        } else {
            onChange(data.get("id"));
        }
    };
    render() {
        let { field, multiple, departments } = this.props;
        let value = this.initValue(this.props);
        let selecteditems = departments
            ? departments.filter(dep => {
                  return value.indexOf(dep.get("id")) != -1;
              })
            : [];
        return (
            <DepartmentModal multiple={multiple} selected={value} onSelected={this.handleSelected}>
                <Item
                    arrow="horizontal"
                    extra={selecteditems.map(i => {
                        return (
                            <span key={i.get("id")} className={styles.item}>
                                {i.get("name")}
                            </span>
                        );
                    })}
                >
                    <span className={styles.title}>{field.title}</span>
                </Item>
            </DepartmentModal>
        );
    }
}
