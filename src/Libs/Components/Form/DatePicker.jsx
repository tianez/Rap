import React, { Component } from 'react'

import { Form, DatePicker } from 'antd';
const { Item } = Form;
import moment from 'moment';

class myDatePicker extends Component {
    handleChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }
    handleOk = (value) => {
        console.log('onOk: ', value);
    }
    render() {
        let { value, title } = this.props
        return (
            <Item label={title} >
                <DatePicker
                    defaultValue={moment(value)}
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="Select Time"
                    onChange={this.handleChange}
                    onOk={this.handleOk}
                    allowClear={false}
                />
            </Item>

        )
    }
}

export default myDatePicker