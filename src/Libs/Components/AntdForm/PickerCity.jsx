import React, { Component } from "react";
import { Form, Input, Cascader } from "antd";
const { Item } = Form;
import handleChange from "./action/handleChange";

import datajson from "./PickerCityJson";

const PickerCity = ({ field, value, onChange }) => {
    // value = value || field.defaultValue || ["42", "4228", "422801"];
    return (
        <Item label={field.title}>
            <Cascader style={{ width: "100%" }} defaultValue={value} placeholder='请选择城市地点' options={datajson} onChange={onChange} />
        </Item>
    );
};

export default handleChange(PickerCity);
