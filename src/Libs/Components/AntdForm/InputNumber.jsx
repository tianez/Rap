import React, { Component } from "react";
import { Form, InputNumber } from "antd";
const { Item } = Form;

import handleChange from "./action/handleChange";

const InputItem = ({ field, value, onChange }) => (
    <Item label={field.title}>
        <InputNumber {...field} onChange={onChange} value={value} />
    </Item>
);

export default handleChange(InputItem);
