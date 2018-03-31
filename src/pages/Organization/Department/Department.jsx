/**
 * 部门管理
 */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBar, Icon, Popover } from "antd-mobile";
import DepartmentComponents from "Components/Department/DepartmentComponents";
import LeftIcon from "Components/Layout/LeftIcon";
class DepartmentIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    /**
     * 选中部门回调
     */
    handleSelected = data => {
        let { history, match } = this.props;
        history.push(match.url + "/" + data.id);
    };
    render() {
        return (
            <DepartmentComponents onSelected={this.handleSelected}>
                {(selectedKeys, selectedRows) => {
                    return (
                        <NavBar mode="light" icon={<LeftIcon />}>
                            部门管理
                        </NavBar>
                    );
                }}
            </DepartmentComponents>
        );
    }
}

export default DepartmentIndex;
