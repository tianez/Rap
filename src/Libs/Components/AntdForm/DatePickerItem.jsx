import React, { Component } from "react";
import { Form, DatePicker } from "antd";
const { Item } = Form;
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

export default class DatePickerItem extends Component {
    componentDidMount() {
        let { onChange, field, value } = this.props;
        if (!value) {
            onChange && onChange(field.name, Date.parse(new Date()));
        }
    }
    handleChange = (value, dateString) => {
        let { onChange, field } = this.props;
        let timestamp = Date.parse(new Date(dateString));
        onChange && onChange(field.name, timestamp);
    };
    render() {
        let { value, field, ...props } = this.props;
        value = value || field.defaultValue;
        return (
            <Item label={field.title}>
                <DatePicker
                    allowClear={false}
                    defaultValue={moment(value)}
                    {...props}
                    showTime
                    format={field.format || "YYYY-MM-DD HH:mm:ss"}
                    placeholder={field.placeholder}
                    onChange={this.handleChange}
                />
            </Item>
        );
    }
}
