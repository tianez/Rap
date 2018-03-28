import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

import OrganizationComponents from './OrganizationComponents';

/**
 * onSelected()：选择完成后回调函数，为选中对象，
 */

export default class OrganizationModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
        }
    }
    /**
     * 选择部门显示modal
     */
    handleShowModal = () => {
        this.setState({
            visible: true,
        })
    }
    /**
     * 返回按钮事件
     */
    handleLeftClick = () => {
        // e.stopPropagation()
        this.setState({
            visible: false,
        })
    }

    handleSelected = (data) => {
        // e.stopPropagation()
        let { onSelected } = this.props
        onSelected && onSelected(data)
        this.setState({
            visible: false,
        })
    }
    render() {
        let { children, style, className, ...props } = this.props
        let { visible } = this.state
        return (
            <div onClick={this.handleShowModal} style={style} className={className || ''}>
                {children}
                {visible && <OrganizationComponents {...props} onLeftClick={this.handleLeftClick} onSelected={this.handleSelected} />}
            </div>
        )
    }
}
