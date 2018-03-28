import React, { Component } from "react";

import { NavBar, Icon, Popover } from "antd-mobile";
const Item = Popover.Item;
import { contextConsumers } from "Libs/ContextRudex";
import LeftIcon from "Components/Layout/LeftIcon";

@contextConsumers(state => ({
    orgs: state.orgs || $arr,
    orgId: state.orgId
}))
export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            selected: ""
        };
    }
    handleSelect = opt => {
        this.props.dispatch("init/save", {
            orgId: opt.props.value
        });
    };
    handleClose = () => {
        YSSJ.close();
    };
    render() {
        let { title, orgs, orgId } = this.props;
        let org = orgs.findIndex(d => {
            return d.orgId == orgId;
        });
        let orgItems = orgs.filter(d => {
            return d.orgId != orgId;
        });
        let curOrg = orgs[0] || $obj;
        return (
            <NavBar mode="light" icon={<LeftIcon ishome={true} />}>
                {orgItems.size > 0 ? (
                    <Popover
                        mask
                        overlayClassName="fortest"
                        placement="bottom"
                        overlayStyle={{ color: "currentColor" }}
                        visible={this.state.visible}
                        overlay={orgItems.map(org => {
                            return (
                                <Item key={org.orgId} value={org.orgId}>
                                    {org.orgName}
                                </Item>
                            );
                        })}
                        align={{
                            overflow: { adjustY: 0, adjustX: 0 },
                            offset: [0, 10]
                        }}
                        onSelect={this.handleSelect}
                    >
                        <span>{curOrg.orgName || ""}</span>
                    </Popover>
                ) : (
                    <span>{curOrg.orgName || ""}</span>
                )}
            </NavBar>
        );
    }
}
