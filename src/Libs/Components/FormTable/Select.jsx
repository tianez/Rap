import React, { Component } from "react";
import { Picker, List } from "antd-mobile";
import handleChange from "./handleChange";

import styles from "./Form.scss";

const ExportComponent = ({ title, name, value, opts, onChange, ...props }) => {
    return (
        <List.Item
            arrow="horizontal"
            extra={
                <select name={name} onChange={e => onChange(e.target.value)} value={value}>
                    <option>请选择</option>
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
