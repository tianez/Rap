/**
 * 高阶函数
 * 获取用户列表信息
 */
import React, { Component } from "react";

const reqUserList = (fieldname = "userList", remoteServer = false) => Component =>
    class extends React.Component {
        state = {
            data: []
        };
        async componentDidMount() {
            if (remoteServer) {
                this.reqDataServer();
            } else {
                this.reqDataRedux();
            }
        }
        reqDataRedux = async () => {
            let data = this.props[fieldname];
            if (data) {
                return;
            }
            let organizationId = localStorage.organizationId;
            let res = await Request("relation/findList", {
                params: {
                    organizationId,
                    psize: 10000
                }
            });
            if (res.success) {
                this.props.dispatch.setIn(["userList", organizationId], res.data.list.userList);
            }
        };
        reqDataServer = async () => {
            let organizationId = localStorage.organizationId;
            let res = await Request("relation/findList", {
                params: {
                    organizationId,
                    psize: 10000
                }
            });
            if (res.success) {
                this.setState({
                    data: res.data.list.userList
                });
            }
        };
        handleUpdate = () => {
            if (remoteServer) {
                this.reqDataServer();
            } else {
                this.reqDataRedux();
            }
        };
        render() {
            let props = {};
            if (remoteServer) {
                props[fieldname] = this.state.data;
            }
            return <Component {...this.props} {...props} onUpdate={this.handleUpdate} />;
        }
    };
export default reqUserList;
