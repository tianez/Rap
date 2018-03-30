/**
 * 添加员工
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { createForm } from 'rc-form';
import { NavBar, Icon, List, InputItem, WhiteSpace, Toast } from 'antd-mobile';
const Item = List.Item;

import Layout from 'Components/Layout/Layout'
import Content from 'Components/Layout/Content'
import DepartmentModal from 'Components/Department/DepartmentModal'
import OrganizationModal from 'Components/Organization/OrganizationModal'

import reqDepartment from 'Action/reqDepartment'

import styles from './Member.scss';

@connect(state => ({
    departments: state.getIn(['Departments', localStorage.organizationId])
}))
@reqDepartment
@createForm()

export default class Member extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    /**
     * 选中部门回调
     */
    handleDepartmentChecked = (data) => {
        let { onDepartmentChecked } = this.props
        onDepartmentChecked && onDepartmentChecked(data)
    }
    /**
     * 提交表单
     */
    handleSubmit = () => {
        this.props.form.validateFields((error, value) => {
            if (error) {
                for (const key in error) {
                    Toast.info(error[key].errors[0].message, 2);
                }
                return
            }
            let { onSubmit } = this.props
            onSubmit && onSubmit(value)
        });
    }
    render() {
        let { departments, user, title } = this.props
        const { getFieldProps } = this.props.form;
        let items = departments.filter(dep => {
            return user.depArr.indexOf(dep.id) != -1
        })
        return (
            <Layout>
                <NavBar mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back()}
                    rightContent={<span onClick={this.handleSubmit}>完成</span>}>{title}</NavBar>
                <Content>
                    <List>
                        <InputItem
                            {...getFieldProps('phone', {
                                initialValue: user.phone,
                                rules: [{ required: true, message: "电话必填" }],
                            }) }
                            placeholder="必填">电话</InputItem>
                        <InputItem
                            {...getFieldProps('userName', {
                                initialValue: user.userName,
                                rules: [{ required: true, message: "姓名必填" }],
                            }) }
                            placeholder="必填">姓名</InputItem>
                        <InputItem
                            {...getFieldProps('userPosition', {
                                initialValue: user.userPosition,
                            }) }
                            placeholder="选填">职位</InputItem>
                        <InputItem
                            {...getFieldProps('companyemail', {
                                initialValue: user.companyemail,
                            }) }
                            placeholder="选填">企业邮箱</InputItem>
                        <DepartmentModal multiple={true}
                            selected={user.depArr}
                            onSelected={this.handleDepartmentChecked}>
                            <Item
                                {...getFieldProps('depArr', {
                                    initialValue: user.depArr,
                                }) }
                                arrow="horizontal"
                                placeholder="必填"
                                extra={items.map(i => {
                                    return <span className={styles.item}>{i.name}</span>
                                })}>
                                <span className={styles.title}>部门</span>
                            </Item>
                        </DepartmentModal>
                        <InputItem
                            {...getFieldProps('jobnumber', {
                                initialValue: user.jobnumber,
                            }) }
                            placeholder="选填">工号</InputItem>
                    </List>
                    <WhiteSpace />
                    <List renderHeader={() => '高级设置'}>
                        <InputItem placeholder="选填" data-name="name" onChange={this.handleChange}>员工ID</InputItem>
                    </List>
                </Content>

            </Layout>
        )
    }
}


