import React, { Component } from 'react'

import DepartmentComponents from './DepartmentComponents';

/**
 * breadcrumbsInit：是否每次进入组件都初始化面包屑
 * onSelected()：选择完成后回调函数，单选为选中对象，多选为选中部门数组ID
 * multiple：是否是多选，默认false
 * selected：默认选中的数组id，[]
 * disabled：禁止选中的数组id，[]
 */

export default class DepartmentModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            departmentVisible: false,
        }
    }
    /**
     * 选择部门显示modal
     */
    handleShowDepartment = () => {
        this.setState({
            departmentVisible: true,
        })
    }
    /**
     * 选择部门返回按钮事件
     */
    handleDepartmentLeftClick = () => {
        this.setState({
            departmentVisible: false,
        })
    }

    handleSelected = (data) => {
        let { onSelected } = this.props
        onSelected && onSelected(data)
        this.setState({
            departmentVisible: false,
        })
    }
    render() {
        let { children, style, className, ...props } = this.props
        let { departmentVisible } = this.state
        return (
            <div onClick={this.handleShowDepartment} style={style} className={className || ''}>
                {children}
                {departmentVisible && <DepartmentComponents {...props}
                    onLeftClick={this.handleDepartmentLeftClick}
                    onSelected={this.handleSelected}
                />}
            </div>
        )
    }
}
