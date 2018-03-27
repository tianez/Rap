import React, { Component } from 'react'
import classNames from 'classnames'

import { Input } from 'antd';
const { TextArea } = Input;

import styles from './TextArea.scss'

class TextAreas extends Component {
    handleChange = (e) => {
        let { name, value, maxlength } = this.props
        let val = e.target.value.trim()
        if (val == value) {
            return
        }
        this.props.onChange && this.props.onChange(name, val)
    }
    render() {
        let { maxlength, value } = this.props
        let cls = styles.item
        let valueLength = value ? value.length : 0
        if (maxlength && maxlength == valueLength) {
            cls = classNames(cls, styles.error)
        }
        return (
            <div className={cls} >
                <TextArea className={styles.ipt} autosize={true} {...this.props} onChange={this.handleChange} />
                {maxlength && <span className={styles.tip}>{valueLength + '/' + maxlength}</span>}
            </div>
        )
    }
}

export default TextAreas