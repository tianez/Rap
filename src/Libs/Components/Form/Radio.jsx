import React, { Component } from "react";

import { List, Radio } from "antd-mobile";
const RadioItem = Radio.RadioItem;

import handleChange from "./handleChange";

const ExportComponent = ({ field, value, onChange }) =>
    field.opts.map(i => (
        <RadioItem key={i.value} checked={value === i.value} onChange={onChange.bind(null, i.value)}>
            {i.label}
        </RadioItem>
    ));

export default handleChange(ExportComponent);
