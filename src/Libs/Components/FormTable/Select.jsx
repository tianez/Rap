import React, { Component } from "react";
import { Picker, List } from "antd-mobile";
import handleChange from "./handleChange";

import styles from "./Form.scss";

const ExportComponent = ({ title, name, value, defaultValue, opts, onChange, ...props }) => {
    return (
        <List.Item
            arrow="horizontal"
            extra={
                <select name={name} onChange={e => onChange(e.target.value)} value={value}>
                    {!defaultValue && defaultValue != 0 && <option value="">请选择</option>}
                    {opts &&
                        opts.map(opt => {
                            return (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            );
                        })}
                </select>
            }
        >
            {title}
        </List.Item>
    );
};

export default handleChange(ExportComponent);
