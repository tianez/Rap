import React, { Component } from "react";
import { List, DatePicker } from "antd-mobile";
const Item = List.Item;

import styles from "./Form.scss";

const nowTimeStamp = Date.now();
let minDate = new Date(nowTimeStamp - 86400000 * 30);

class ExportComponent extends Component {
    handleChange = value => {
        let { onChange, name } = this.props;
        let timestamp = Date.parse(new Date(value));
        onChange && onChange(name, timestamp);
    };
    render() {
        let { value, defaultValue, title, mode } = this.props;
        let initialValue = null;
        value = value || defaultValue;
        if (value) {
            initialValue = new Date(value);
        }
        return (
            <DatePicker value={initialValue} onChange={this.handleChange} minDate={minDate} mode={mode}>
                <Item className={styles.datepicker} arrow="horizontal">
                    {title}
                </Item>
            </DatePicker>
        );
    }
}

export default ExportComponent;
