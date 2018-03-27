import React, { Component } from 'react'
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

import { DatePicker } from 'antd';

import styles from './Input.scss'

class Input extends Component {

    handleChange = (e) => {
        let { name, onChange } = this.props
        onChange && onChange(name, e.target.value)
    }
    render() {
        let { title, value } = this.props
        return (
            <div className={styles.item}>
                <div className={styles.title}>{title}</div>
                <input className={styles.ipt} type="text" {...this.props} onChange={this.handleChange} autoComplete={'off'} />
            </div>
        )
    }
}

export default Input