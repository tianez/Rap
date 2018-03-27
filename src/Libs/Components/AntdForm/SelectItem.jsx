import React, { Component } from "react";

import { Form, Select } from "antd";
const { Item } = Form;
const Option = Select.Option;

import handleChange from "./action/handleChange";
@handleChange
export default class SelectItem extends Component {
    render() {
        let { field, value, onChange } = this.props;
        return (
            <Item label={field.title}>
                <Select value={value} onChange={onChange} style={{ width: "100%" }}>
                    {field.opts &&
                        field.opts.map(opt => {
                            return <Option key={opt.key || opt.value}>{opt.title || opt.label}</Option>;
                        })}
                </Select>
            </Item>
        );
    }
}
