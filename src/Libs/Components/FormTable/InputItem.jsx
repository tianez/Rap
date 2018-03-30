import React, { Component } from "react";
import { InputItem } from "antd-mobile";
import handleChange from "./handleChange";

const ExportComponent = ({ title, value, type = "text", placeholder, onChange }) => {
    return (
        <InputItem value={value} onChange={onChange} type={type} placeholder={placeholder}>
            {title}
        </InputItem>
    );
};

export default handleChange(ExportComponent);
