import React, { Component } from "react";

import { Slider } from "antd-mobile";

import styles from "./Form.scss";
import handleChange from "./handleChange";

const ExportComponent = ({ field, value, onChange }) => (
    <div className={styles.slider}>
        <Slider defaultValue={value} min={field.min} max={field.max} onChange={onChange} />
    </div>
);

export default handleChange(ExportComponent);
