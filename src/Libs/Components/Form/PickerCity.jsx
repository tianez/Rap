import React, { Component } from "react";
import { Picker, List } from "antd-mobile";
import handleChange from "./handleChange";

import styles from "./Form.scss";

// import datajson from "./PickerCityJson";
import asyncComponent from "Extended/asyncComponent";
const datajson = asyncComponent(() => import("Components/Form/PickerCityJson"));

const PickerCity = ({ getFieldProps, field, value, onChange }) => {
    value = value || field.defaultValue || ["42", "4228", "422801"];
    return (
        <Picker
            title="选择地区"
            extra="请选择"
            data={datajson}
            value={value}
            onChange={onChange}
            // onOk={onChange}
        >
            <List.Item arrow="horizontal">{field.title}</List.Item>
        </Picker>
    );
};

export default handleChange(PickerCity);
