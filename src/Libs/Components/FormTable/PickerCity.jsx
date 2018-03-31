import React, { Component } from "react";
import { Picker, List } from "antd-mobile";
import handleChange from "./handleChange";

import styles from "./Form.scss";
import datajson from "./PickerCityJson";

const PickerCity = ({ defaultValue, title, value, onChange }) => {
    value = value || defaultValue;
    return (
        <Picker
            title="选择地区"
            extra="请选择"
            data={datajson}
            value={value}
            onChange={onChange}
            // onOk={onChange}
        >
            <List.Item arrow="horizontal">{title}</List.Item>
        </Picker>
    );
};

export default handleChange(PickerCity);
