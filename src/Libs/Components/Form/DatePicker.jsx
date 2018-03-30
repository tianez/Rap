import React, { Component } from "react";
import { List, DatePicker } from "antd-mobile";
const Item = List.Item;
import handleChange from "./handleChange";

import styles from "./Form.scss";

const nowTimeStamp = Date.now();
let minDate = new Date(nowTimeStamp - 86400000);

class ExportComponent extends Component {
    handleChange = value => {
        let { onChange } = this.props;
        let timestamp = Date.parse(new Date(value));
        onChange && onChange(timestamp);
    };
    render() {
        let { field, value } = this.props;
        let initialValue = null;
        value = value || field.defaultValue;
        if (value) {
            initialValue = new Date(value);
        }
        return (
            <DatePicker value={initialValue} onChange={this.handleChange} minDate={minDate} mode={field.mode}>
                <Item className={styles.datepicker} arrow="horizontal">
                    {field.title}
                </Item>
            </DatePicker>
        );
    }
}

export default handleChange(ExportComponent);
