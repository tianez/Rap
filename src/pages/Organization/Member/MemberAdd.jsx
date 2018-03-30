/**
 * 添加员工
 */

import React, { Component } from "react";
import FormTable from "Components/FormTable/FormTable";
import fields from "./fieldJson";

export default class MemberAdd extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = value => {
        console.log(value);
    };
    render() {
        return <FormTable fields={fields} headerTitle="添加用户" onSubmit={this.handleSubmit} />;
    }
}
