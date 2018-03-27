import React, { Component } from "react";
import { Form, Input } from "antd";
const { Item } = Form;

import handleChange from "./action/handleChange";

const InputItem = ({ field, value, type = "text", onChange }) => (
    <Item label={field.title}>
        <Input onChange={e => onChange(e.target.value)} type={type} value={value} placeholder={field.placeholder} />
    </Item>
);

export default handleChange(InputItem);
