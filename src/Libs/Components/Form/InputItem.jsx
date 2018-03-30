import React, { Component } from "react";
import { InputItem } from "antd-mobile";
import handleChange from "./handleChange";

import styles from "./Form.scss";

const ExportComponent = ({ field, value, type = "text", onChange }) => (
    <InputItem value={value || field.defaultValue} onChange={onChange} type={type} placeholder={field.placeholder}>
        {field.title}
    </InputItem>
);

export default handleChange(ExportComponent);
