/**
 * 高阶函数
 * 获取部门列表信息
 */
import React, { Component } from "react";

const reqDepartment = (fieldname = "deptList", remoteServer = false) => Component =>
    class extends React.Component {
        state = {
            data: []
        };
        componentDidMount() {
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
            let { setInContext } = this.props.contextRudexAction;
            let organizationId = localStorage.orgId;
            let res = await Request("deptment/deptList", {
                params: {
                    id: organizationId,
                    psize: 10000
                }
            });
            if (res.success) {
                setInContext(["deptList", localStorage.orgId], res.data.deptList, true);
            }
        };
        reqDataServer = async () => {
            let orgId = localStorage.orgId;
            let res = await Request("deptment/deptList", {
                params: {
                    id: orgId,
                    psize: 10000
                }
            });
            if (res.success) {
                this.setState({
                    data: res.data.deptList
                });
            }
        };
        handleUpdateDepartment = () => {
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
            return <Component {...this.props} {...props} onUpdateDepartment={this.handleUpdateDepartment} />;
        }
    };
export default reqDepartment;
