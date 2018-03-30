import React, { Component } from "react";
import { Picker, List } from "antd-mobile";
import handleChange from "./handleChange";

import styles from "./Form.scss";

const ExportComponent = ({ field, value, onChange }) => (
    <List.Item
        arrow="horizontal"
        extra={
            <select name={field.name} onChange={e => onChange(e.target.value)} value={value || field.defaultValue}>
                <option>请选择</option>
                {field.opts &&
                    field.opts.map(opt => {
                        return (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        );
                    })}
            </select>
        }
    >
        {field.title}
    </List.Item>
);

export default handleChange(ExportComponent);
