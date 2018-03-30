import React, { Component } from "react";
import { TextareaItem } from "antd-mobile";
import handleChange from "./handleChange";

import styles from "./Form.scss";

const ExportComponent = ({ field, value, onChange }) => (
    <TextareaItem
        value={value || field.defaultValue}
        onChange={onChange}
        placeholder={field.placeholder}
        title={field.title}
        rows={2}
        autoHeight
        count={field.count}
    />
);

export default handleChange(ExportComponent);
