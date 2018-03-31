import React, { Component } from "react";

import { Slider } from "antd-mobile";

import styles from "./Form.scss";
import handleChange from "./handleChange";

const ExportComponent = ({ min, max, value, onChange }) => (
    <div className={styles.slider}>
        <Slider defaultValue={value} min={min} max={max} onChange={onChange} />
    </div>
);

export default handleChange(ExportComponent);
