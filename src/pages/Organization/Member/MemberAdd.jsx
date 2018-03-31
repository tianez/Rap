/**
 * 添加员工
 */

import React, { Component } from "react";
import asyncComponent from "Extended/asyncComponent";
const FormTable = asyncComponent(() => import("Components/FormTable/FormTable"), true);
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
