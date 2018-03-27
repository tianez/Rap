import React, { Component } from 'react'
import classNames from 'classnames'

import styles from './Title.scss'

class Title extends Component {
    handleChange = (e) => {
        let { name, value, maxlength, onChange } = this.props
        let val = e.target.value.trim()
        if (val == value) {
            return
        }
        onChange && onChange(name, val)
    }
    render() {
        let { maxlength, value } = this.props
        let cls = styles.title
        let valueLength = value ? value.length : 0
        if (maxlength && maxlength == valueLength) {
            cls = classNames(cls, styles.error)
        }
        return (
            <div className={cls} >
                <input className={styles.ipt} type="text" {...this.props} onChange={this.handleChange} autoComplete={'off'} />
                {maxlength && <span className={styles.tip}>{valueLength + '/' + maxlength}</span>}
            </div>
        )
    }
}

export default Title