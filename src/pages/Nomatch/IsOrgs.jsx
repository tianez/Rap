import React, { Component } from "react";
import { Toast } from "antd-mobile";
import { contextConsumers } from "Libs/ContextRudex";
import Nomatch from "./Nomatch";

/**
 * 系统登录模块
 */

@contextConsumers(state => ({
    orgInfo: state.orgInfo
}))
export default class IsLogin extends React.Component {
    componentDidMount() {
        this.getOrgInfo();
    }
    async getOrgInfo() {
        Toast.loading("机构信息及权限获取中...", 0);
        let orgInfos = await Request("relation/findOrg", {
            params: {
                userId: localStorage.userId
            }
        });
        if (orgInfos.success) {
            Toast.hide();
            let orgId = localStorage.organizationId;
            let orgslist = orgInfos.data.orgList.list;
            let orgIndex = orgslist.findIndex(org => {
                return org.orgId == orgId;
            });
            if (orgIndex == -1) {
                orgIndex = 0;
            }
            let orgInfo = orgslist[orgIndex];
            if (orgInfo) {
                orgId = orgInfo.orgId;
                localStorage.organizationId = orgId;
                localStorage.organizationName = orgInfo.orgName;
            }
            let auths = await Request("role/selectPermissionByUserId", {
                params: {
                    id: localStorage.userId
                }
            });
            if (auths.success) {
                window.auths = auths.data.permission.menus.map(d => {
                    return d.code;
                });
            }
            this.props.dispatch.set({
                orgs: orgslist,
                orgId: orgId,
                orgInfo: orgInfo
            });
        } else {
            if (orgInfos.errorCode == 6666) {
                return;
            }
            Toast.info(orgInfos.message);
        }
    }
    render() {
        let { orgInfo, children } = this.props;
        if (orgInfo) {
            return children;
        }
        return <Nomatch title="机构信息及权限获取中..." />;
    }
}
