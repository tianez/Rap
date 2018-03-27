import React, { Component } from 'react'
import { Switch } from 'antd';

import styles from './Recommend.scss'

class Recommend extends Component {
    handleChange = (checked) => {
        let { name, onChange } = this.props
        let value = checked ? 1 : 0
        onChange && onChange(name, value)
    }
    render() {
        let { title, value } = this.props
        return (
            <div className={styles.item}>
                <div className={styles.title}>{title}</div>
                <Switch defaultChecked={value} onChange={this.handleChange} />
            </div>
        )
    }
}

export default Recommend