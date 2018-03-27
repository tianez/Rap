/**
 * 高阶函数
 * 获取用户列表信息
 */
import React, { Component } from "react";

const reqUserList = (fieldname = "userList") => Component =>
    class extends React.Component {
        state = {
            userList: []
        };
        async componentDidMount() {
            let data = this.props[fieldname];
            if (data) {
                return;
            }
            let { setInContext } = this.props.contextRudexAction;
            let organizationId = localStorage.orgId;
            let res = await Request("relation/findList", {
                params: {
                    organizationId,
                    psize: 10000
                }
            });
            if (res.success) {
                setInContext(["userList", localStorage.orgId], res.data.list.userList, true);
            }
        }
        render() {
            return <Component {...this.props} />;
        }
    };
export default reqUserList;
