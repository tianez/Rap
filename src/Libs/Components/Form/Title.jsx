import React, { Component } from 'react'
import classNames from 'classnames'

import styles from './Title.scss'

class Title extends Component {
    handleChange = (e) => {
        let { name, value } = this.props
        let val = e.target.value.trim()
        if (val == value) {
            return
        }
        this.props.onChange(name, val)
    }
    render() {
        let { title } = styles
        let cls = classNames(title, {
            title: true
        })
        return (
            <div className={cls} >
                <input type="text" {...this.props} onChange={this.handleChange} />
            </div>
        )
    }
}

export default Title