"use strict";

import React, { Component } from "react";
import { Form } from "antd";
const { Item } = Form;

import handleChange from "./action/handleChange";

@handleChange
export default class Ueditor extends Component {
    static defaultProps = {
        value: ""
    };
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.ueditor = UE.getEditor("ueditor_" + this.props.name, {
            autoHeightEnabled: true,
            autoFloatEnabled: false,
            initialFrameHeight: this.props.initialFrameHeight || 400
        });
        this.ueditor.ready(() => this.handleReady(this.props));
    }
    handleReady = props => {
        this.ueditor.setContent(props.value);
        if (props.onChange) {
            this.ueditor.addListener("contentChange", () => this.handleChange());
        }
    };

    handleChange = () => {
        let html = this.ueditor.getContent();
        this.props.onChange(html);
    };

    componentWillUnmount() {
        this.ueditor.destroy();
    }

    render() {
        let { title } = this.props.field;
        return (
            <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                    <label title={title}>{title}</label>
                </div>
                <div className="ant-form-item-control-wrapper">
                    <textarea
                        id={"ueditor_" + this.props.name}
                        style={{ width: "100%", border: "1px solid #d9d9d9" }}
                    />
                </div>
            </div>
        );
    }
}
