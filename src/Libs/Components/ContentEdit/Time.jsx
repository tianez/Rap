import React, { Component } from 'react'
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

import { DatePicker } from 'antd';

import styles from './Time.scss'

class Time extends Component {
    handleChange = (value) => {

    }
    handleChange = (value, dateString) => {
        let { name } = this.props
        console.log('Selected Time: ', value);
        console.log(dateString);
        this.props.onChange && this.props.onChange(name, dateString)
    }
    handleOk = (value) => {
        console.log('onOk: ', value);
    }
    render() {
        let { title, value } = this.props
        return (
            <div className={styles.item}>
                <div className={styles.title}>{title}</div>
                <DatePicker
                    defaultValue={moment(value)}
                    format="YYYY-MM-DD HH:mm:ss"
                    showTime
                    style={{ flex: '1' }}
                    // showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    onChange={this.handleChange}
                    onOk={this.handleOk}
                    allowClear={false}
                    locale={'zh_CN'}
                />
            </div>
        )
    }
}

export default Time