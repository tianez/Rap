/**
 * 表单通用
 */

import React, { Component } from "react";
import ListForm from "./ListForm";
import FormProps from 'Hoc/FormProps'

@FormProps
export default class Form extends Component {
    render() {
        return <ListForm {...this.props} />;
    }
}
