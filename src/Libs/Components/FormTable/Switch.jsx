import React, { Component } from "react";

import { List, Switch } from "antd-mobile";
import handleChange from "./handleChange";

const ExportComponent = ({ title, value, onChange }) => (
    <List.Item extra={<Switch onChange={onChange} />}>{title}</List.Item>
);

export default handleChange(ExportComponent);
