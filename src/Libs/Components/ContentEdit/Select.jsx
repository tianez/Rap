import React, { Component } from 'react'
import { Select } from 'antd';
const Option = Select.Option;

import styles from './Select.scss'

class mySelect extends Component {
    handleChange = (value) => {
        let { name } = this.props
        console.log(value);
        this.props.onChange && this.props.onChange(name, value)
    }
    render() {
        return (
            <div className={styles.select}>
                <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    {...this.props}
                    onChange={this.handleChange}
                    tokenSeparators={[',', ' ']}
                >
                    {/* {children} */}
                </Select>
            </div>
        )
    }
}

export default mySelect