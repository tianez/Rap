import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { NavBar, Icon, Popover } from "antd-mobile";
const Item = Popover.Item;

import OrganizationComponents from "Components/Organization/OrganizationComponents";
import LeftIcon from "Components/Layout/LeftIcon";
import styles from "./OrganizationIndex.scss";
const myImg = src => (
    <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />
);

export default class OrganizationIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    handleUserListClick = data => {
        let { history, match } = this.props;
        history.push(match.url + "/" + data.userId);
    };
    render() {
        return (
            <OrganizationComponents onClickUser={this.handleUserListClick}>
                {(selectedKeys, selectedUsers) => {
                    return (
                        <NavBar
                            mode="light"
                            icon={<LeftIcon />}
                            // rightContent={
                            //     <Popover
                            //         mask
                            //         placement="bottomRight"
                            //         visible={this.state.visible}
                            //         overlay={
                            //             <Item key="4" value="scan" icon={myImg("tOtXhkIWzwotgGSeptou")}>
                            //                 <Link to={match.url + "/department"} className={styles.fta}>
                            //                     部门管理
                            //                 </Link>
                            //             </Item>
                            //         }
                            //         align={{
                            //             overflow: { adjustY: 0, adjustX: 0 },
                            //             offset: [0, 10]
                            //         }}
                            //     >
                            //         <Icon key="1" type="ellipsis" />
                            //     </Popover>
                            // }
                        >
                            组织架构
                        </NavBar>
                    );
                }}
            </OrganizationComponents>
        );
    }
}
