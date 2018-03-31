import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { NavBar, List, Icon, Toast } from "antd-mobile";
const Item = List.Item;
import LeftIcon from "Components/Layout/LeftIcon";
import DepartmentComponents from "Components/Department/DepartmentComponents";
import reqDeptsAction from "Hoc/reqDeptsAction";
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers(state => ({
    query: state.query,
    deptlist: state.getIn(["deptList", localStorage.organizationId])
}))
@withRouter
export default class SelectDepCpt extends Component {
    componentDidMount() {
        let { deptlist } = this.props;
        if (!deptlist) {
            this.props.dispatch.callBack(reqDeptsAction);
        }
    }
    handleShowDepartment = () => {
        let { match, history, name } = this.props;
        history.push(match.url + "?" + name + "=true");
    };
    handleSelected = row => {
        let { name } = this.props;
        this.props.onChange(name, row);
        window.history.back();
    };
    render() {
        let { deptlist = $arr, value, query, name } = this.props;
        let items = deptlist.filter(dep => {
            return value.indexOf(dep.id);
        });
        return [
            <Item
                arrow="horizontal"
                extra={items.map(i => {
                    return <span>{i.name}</span>;
                })}
                onClick={this.handleShowDepartment}
            >
                <span>考勤部门</span>
            </Item>,
            query[name] && (
                <DepartmentComponents multiple={true} selectedKeys={value}>
                    {(selectedKeys, selectedRows) => {
                        return (
                            <NavBar
                                mode="light"
                                icon={<LeftIcon />}
                                rightContent={
                                    <div onClick={() => this.handleSelected(selectedKeys, selectedRows)}>确定</div>
                                }
                            >
                                选择考勤部门
                            </NavBar>
                        );
                    }}
                </DepartmentComponents>
            )
        ];
    }
}
