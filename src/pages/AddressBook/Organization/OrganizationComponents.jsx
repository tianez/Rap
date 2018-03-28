/**
 * 组织架构组件
 * onSelected：点击人员列表项回调函数
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import { NavBar, Icon, SearchBar } from "antd-mobile";

import { contextConsumers } from "Libs/ContextRudex";
import reqdeptlist from "Hoc/Reqdeptlist";
import reqUserList from "Hoc/ReqUserList";

import styles from "./OrganizationComponents.scss";

import DepList from "./DepList";
import UserList from "./UserList";
import Breadcrumbs from "./Breadcrumbs";

import filterData from "./filterData";

@contextConsumers(state => ({
    deptlist: state.getIn(["deptList", localStorage.organizationId]),
    userlist: state.getIn(["userList", localStorage.organizationId]),
    breadcrumbs: state.getIn(["Breadcrumbs", localStorage.organizationId, "organizationbreadcrumbs"]) || $arr,
    orgInfo: state.orgInfo
}))
@reqdeptlist()
@reqUserList()
export default class OrganizationComponents extends Component {
    static defaultProps = {
        visible: true,
        multiple: false,
        selected: [],
        disabled: []
    };
    constructor(props) {
        super(props);
        this.state = {
            deptlist: $arr,
            userlist: $arr,
            searchValue: "",
            selected: [].concat(props.selected),
            selectedDevs: {},
            bk: ""
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(prevState);

        let state = filterData(nextProps, prevState.searchValue);
        return state;
    }
    /**
     * 创建水印图片
     */
    watermark = () => {
        let canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 100;
        let ctx = canvas.getContext("2d");
        ctx.rotate(-15 * Math.PI / 180);
        ctx.font = "16px Arial";
        ctx.globalAlpha = 0.25;
        ctx.fillStyle = "#3692fa";
        ctx.textAlign = "center";
        ctx.fillText(localStorage.userName, 40, 60);
        let DataURL = canvas.toDataURL();
        this.setState({
            bk: DataURL
        });
    };
    /**
     * 搜索栏变化
     */
    handleSearchChange = searchValue => {
        console.log(searchValue);
        let state = filterData(this.props, searchValue);
        this.setState({
            ...state,
            searchValue
        });
    };
    /**
     * 点击面包屑导航
     */
    handleChangeBreadcrumbs = index => {
        let { breadcrumbs, dispatch } = this.props;
        breadcrumbs = breadcrumbs.slice(0, index);
        console.log(breadcrumbs);
        dispatch.setIn(["Breadcrumbs", localStorage.organizationId, "organizationbreadcrumbs"], breadcrumbs);

        // this.handleFilter({ breadcrumbs });
    };
    /**
     * 选择操作
     */
    handleSelect = (data, e) => {
        e.stopPropagation();
        let { onSelected, multiple } = this.props;
        if (multiple) {
            this.handleMultipleSelect(data);
        } else {
            onSelected && onSelected(data);
        }
    };
    /**
     * 全选
     */
    handleSelectAll = e => {
        console.log(e);
        let { inituserlist } = this.props;
        let selected = inituserlist.map(user => {
            return user.get("userId");
        });
        this.setState({
            selected: selected.toJS()
        });
    };
    /**
     * 全部取消
     */
    handleSelectDelAll = () => {
        this.setState({
            selected: []
        });
    };
    /**
     * 多选
     */
    handleMultipleSelect = data => {
        let { selected } = this.state;
        let index = selected.indexOf(data.get("userId"));
        if (index == -1) {
            selected.push(data.get("userId"));
        } else {
            selected.splice(index, 1);
        }
        this.setState({
            selected
        });
    };

    /**
     * 全选部门
     */
    handleSelectDep = (list, e) => {
        e.stopPropagation();
        let { selected, selectedDevs } = this.state;
        if (selectedDevs[list.get("id")] == 1) {
            selectedDevs[list.get("id")] = 0;
            list.get("member").map(data => {
                let index = selected.indexOf(data.get("userId"));
                if (index != -1) {
                    selected.splice(index, 1);
                }
            });
        } else {
            selectedDevs[list.get("id")] = 1;
            list.get("member").map(data => {
                let index = selected.indexOf(data.get("userId"));
                if (index == -1) {
                    selected.push(data.get("userId"));
                }
            });
        }
        this.setState({
            selected,
            selectedDevs
        });
    };

    /**
     * 点击部门列表
     */
    handleClickDep = (list, e) => {
        let { breadcrumbs, dispatch } = this.props;
        breadcrumbs = breadcrumbs.concat(list);
        dispatch.setIn(["Breadcrumbs", localStorage.organizationId, "organizationbreadcrumbs"], breadcrumbs);
    };
    /**
     * 点击头部返回按钮
     */
    handleLeftClick = e => {
        e.stopPropagation();
        this.props.onLeftClick();
    };
    /**
     * 点击头部右边按钮
     */
    handleRightClick = e => {
        e.stopPropagation();
        let { onSelected } = this.props;
        let { selected } = this.state;
        onSelected && onSelected(selected);
    };
    click = e => {
        console.log(e);
    };
    render() {
        let { breadcrumbs, orgInfo } = this.props;
        let { deptlist, userlist, searchValue } = this.state;
        return (
            <Layout>
                <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={() => window.history.back()}>
                    通讯率
                </NavBar>
                <SearchBar placeholder="Search" value={searchValue} onChange={this.handleSearchChange} />
                <Breadcrumbs
                    breadcrumbs={breadcrumbs}
                    orgInfo={orgInfo}
                    onChangeBreadcrumbs={this.handleChangeBreadcrumbs}
                />
                <Content>
                    <DepList deptlist={deptlist} onClick={this.handleClickDep} />
                    <UserList userlist={userlist} />
                </Content>
            </Layout>
        );
        return ReactDOM.createPortal(<div>1111111111111111</div>, document.getElementById("root"));
    }
}
