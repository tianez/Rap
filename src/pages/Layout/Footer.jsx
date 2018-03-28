import React, { Component } from "react";
import { List, InputItem } from "antd-mobile";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <List renderHeader={() => "title"}>
                    <InputItem />
                </List>
                Footer
            </div>
        );
    }
}
