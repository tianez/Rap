import React, { Component } from "react";

import { Form, Radio } from "antd";
const { Item } = Form;
const RadioGroup = Radio.Group;

import handleChange from "./action/handleChange";

const RadioItem = ({ field, value, onChange }) => (
    <Item label={field.title}>
        <RadioGroup name={field.name} onChange={e => onChange(e.target.value)}>
            {field.opts &&
                field.opts.map(opt => {
                    return (
                        <Radio key={opt.key} checked={opt.key == value} value={opt.key}>
                            {opt.title}
                        </Radio>
                    );
                })}
        </RadioGroup>
    </Item>
);

export default handleChange(RadioItem);
