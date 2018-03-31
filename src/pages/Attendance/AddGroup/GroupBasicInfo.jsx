import React, { Component } from "react";
import { NavBar, Icon, Button, InputItem, WhiteSpace, Toast, Modal } from "antd-mobile";
const alert = Modal.alert;
import Layout from "Components/Layout/Layout";
import Content from "Components/Layout/Content";
import LeftIcon from "Components/Layout/LeftIcon";

import SelectUserCpt from "Components/FormTable/SelectUserCpt";
import SelectDepCpt from "Components/FormTable/SelectDepCpt";

import Footer from "Components/Layout/FooterBtn";

import styled from "styled-components";

const AlertView = styled.div`
    line-height: 0.22rem;
`;

export default class GroupBasicInfo extends Component {
    handleChange = value => {
        this.props.onChange("attendanceName", value);
    };
    handleChangeDeptList = async (name, value) => {
        let { data } = this.props;
        let id = "null";
        if (data) {
            id = data.id;
        }
        let isadd = value.filter(v => {
            return data.deptList.indexOf(v) == -1;
        });
        if (isadd.length == 0) {
            return this.props.onChange("deptList", value);
        }
        let params = "?attendanceGroupId=" + id;
        value.map(v => {
            params += "&deptIds=" + v;
        });
        let res = await Request("attendanceGroup/verifyMemberDeptment" + params);
        if (res.success) {
            let length = res.data.existMemberList.length;
            if (length > 0) {
                let isext = res.data.existMemberList.map(d => {
                    return d.deptId;
                });
                let names = res.data.existMemberList
                    .map(d => {
                        return d.deptName;
                    })
                    .slice(0, 4);
                let cnames = names.join(",");
                if (length > 4) {
                    cnames += "等" + length + "部门存在于其他考勤组，是否将他们移动到该考勤组?";
                } else {
                    cnames += length + "部门存在于其他考勤组，是否将他们移动到该考勤组?";
                }
                alert(<AlertView>{cnames}</AlertView>, "", [
                    {
                        text: "取消",
                        onPress: () => {
                            let users = value.filter(d => {
                                return isext.indexOf(d) == -1;
                            });
                            this.props.onChange("deptList", users);
                        },
                        style: "default"
                    },
                    { text: "确定", onPress: () => this.props.onChange("deptList", value) }
                ]);
            } else {
                this.props.onChange("deptList", value);
            }
        } else {
            Toast.info(res.message);
        }
    };
    handleChangeUserList = async (name, value = []) => {
        let { data } = this.props;
        let id = "null";
        if (data) {
            id = data.id;
        }
        let isadd = value.filter(v => {
            return data.userList.indexOf(v) == -1;
        });
        if (isadd.length == 0) {
            return this.props.onChange("userList", value);
        }
        let params = "?attendanceGroupId=" + id;
        value.map(v => {
            params += "&userIds=" + v;
        });
        let res = await Request("attendanceGroup/verifyMemberPersonal" + params);
        if (res.success) {
            let length = res.data.existMemberList.length;
            if (length > 0) {
                let isext = res.data.existMemberList.map(d => {
                    return d.userId;
                });
                let names = res.data.existMemberList
                    .map(d => {
                        return d.userName;
                    })
                    .slice(0, 4);
                let cnames = names.join(",");
                if (length > 4) {
                    cnames += "等" + length + "人存在于其他考勤组，是否将他们移动到该考勤组?";
                } else {
                    cnames += length + "人存在于其他考勤组，是否将他们移动到该考勤组?";
                }
                alert(<AlertView>{cnames}</AlertView>, "", [
                    {
                        text: "取消",
                        onPress: () => {
                            let users = value.filter(d => {
                                return isext.indexOf(d) == -1;
                            });
                            this.props.onChange("userList", users);
                        },
                        style: "default"
                    },
                    { text: "确定", onPress: () => this.props.onChange("userList", value) }
                ]);
            } else {
                this.props.onChange("userList", value);
            }
        } else {
            Toast.info(res.message);
        }
    };
    render() {
        let { onChange, data, onSave, title, bartitle } = this.props;
        return (
            <Layout>
                <NavBar mode="light" icon={<LeftIcon />}>
                    {bartitle || "新增考勤组"}
                </NavBar>
                <Content>
                    <WhiteSpace />
                    <InputItem onChange={this.handleChange} value={data.attendanceName} placeholder="请输入考勤组名称">
                        考勤组名称
                    </InputItem>
                    <WhiteSpace />
                    <SelectDepCpt
                        name={"deptList"}
                        value={data.deptList}
                        onChange={this.handleChangeDeptList}
                        multiple={true}
                    />
                    <SelectUserCpt
                        name={"userList"}
                        value={data.userList}
                        onChange={this.handleChangeUserList}
                        title="其他参与人员"
                    />
                    <SelectUserCpt
                        name={"userId"}
                        value={data.userId}
                        onChange={onChange}
                        title="考勤组负责人"
                        single={true}
                    />
                    <WhiteSpace />
                </Content>
                <Footer onClick={onSave} title={title} />
            </Layout>
        );
    }
}
