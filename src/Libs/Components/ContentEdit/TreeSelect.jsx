import React, { Component } from "react";
import { connect } from "react-redux";

import { TreeSelect } from "antd";
import ReqTreeData from "Hoc/ReqTreeData";

import styles from "./TreeSelect.scss";

class myTreeSelect extends Component {
    onChange = value => {
        let { name, onChange } = this.props;
        if (value == undefined) {
            return;
        }
        onChange && onChange(name, value);
    };
    formatTreeData = data => {
        let treeData = data.map(d => {
            let res = { ...d };
            if (d.children && d.children.length > 0) {
                res.disabled = true;
                res.children = this.formatTreeData(d.children);
            }
            return res;
        });
        return treeData;
    };
    render() {
        let { value, treeData } = this.props;
        treeData = this.formatTreeData(treeData);
        return (
            <TreeSelect
                className={styles.channle}
                value={parseInt(value)}
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                treeData={treeData}
                placeholder="选择栏目"
                treeDefaultExpandAll
                onChange={this.onChange}
            />
        );
    }
}

export default connect(state => ({
    Categorys: state.get("Categorys")
}))(ReqTreeData(myTreeSelect));
