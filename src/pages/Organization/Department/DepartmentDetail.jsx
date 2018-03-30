/**
 * 部门详细
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { createForm } from 'rc-form';
import { NavBar, Icon, List, InputItem, WhiteSpace, Toast } from 'antd-mobile';
const Item = List.Item;

import Layout from 'Components/Layout/Layout'
import Content from 'Components/Layout/Content'
import LeftIcon from 'Components/Layout/LeftIcon'
import DepartmentModal from 'Components/Department/DepartmentModal'
import reqDepartment from 'Action/reqDepartment'

import styles from './DepartmentDetail.scss';

@withRouter
@connect(state => ({
    departments: state.getIn(['Departments', localStorage.organizationId])
}))
@reqDepartment
@createForm()

export default class DepartmentDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            departmentDetail: {},
        }
    }
    async componentWillMount() {
        let res = await Request('deptment/selectDeptById', {
            params: {
                id: this.props.match.params.id
            }
        })
        if (res.success) {
            this.setState({
                departmentDetail: res.data.dc,
            })
        } else {
            Toast.info(res.message, 2)
        }
    }
    /**
     * 选中部门回调
     */
    handleDepartmentChecked = (data) => {
        let parent = data.get('id')
        let { departmentDetail } = this.state
        this.setState({
            departmentDetail: {
                ...departmentDetail,
                parent,
            },
        })
    }
    /**
     * 提交保存验证
     */
    handleSubmit = async (value) => {
        this.props.form.validateFields((error, value) => {
            if (error) {
                isok = false
                for (const key in error) {
                    Toast.info(error[key].errors[0].message, 2);
                }
                return
            }
            this.handlePostData(value)
        });
    }
    /**
     * 提交保存
     */
    handlePostData = async (value) => {
        let id = this.props.match.params.id
        let { departmentDetail } = this.state
        let data = {
            ...departmentDetail,
            id,
            ...value,
        }
        let res = await Request('deptment/updateDeptment', {
            method: 'post',
            data: data,
        })
        if (res.success) {
            let { departments, dispatch } = this.props
            let index = departments.findIndex(dep => {
                return dep.get('id') == id
            })
            dispatch('Departments/setIn', [[localStorage.organizationId, index], data])
            Toast.info('更新成功', 2);
        }else{
            Toast.info(res.message, 2);
        }
    }

    /**
     * 删除部门
     */
    handleDelete = async () => {
        let { match, history, departments, dispatch } = this.props
        let res = await Request('deptment/deleteDeptment', {
            method: 'post',
            data: {
                // orginfoId: localStorage.organizationId,
                id: match.params.id,
            }
        })
        if (res.success) {
            departments = departments.filter(dep => {
                return dep.get('id') !== match.params.id
            })
            dispatch('Departments/setIn', [[localStorage.organizationId], departments])
            window.history.back()
        }
        Toast.info(res.message, 2);
    }
    render() {
        const { getFieldProps } = this.props.form;
        let { departmentVisible, departmentDetail } = this.state
        let { departments, match } = this.props
        let items = departments.filter(dep => {
            return departmentDetail.parent == dep.get('id')
        })
        let disabled = [match.params.id]
        return (
            <Layout>
                <NavBar mode="light"
                    icon={<LeftIcon />}
                    rightContent={<span onClick={this.handleSubmit}>完成</span>}>编辑部门</NavBar>
                <Content>
                    <List>
                        <InputItem
                            {...getFieldProps('name', {
                                initialValue: departmentDetail.name,
                                rules: [{ required: true, message: "部门名称必填" }],
                            }) }
                            placeholder="必填" data-name="dh">部门名称</InputItem>
                        <DepartmentModal multiple={false} disabled={disabled} onSelected={this.handleDepartmentChecked}>
                            <Item
                                {...getFieldProps('parent', {
                                    initialValue: departmentDetail.parent,
                                }) }
                                arrow="horizontal"
                                placeholder="必填"
                                extra={items.map(i => {
                                    return <span className={styles.item}>{i.get('name')}</span>
                                })}
                                onClick={this.handleShowDepartment}>
                                <span className={styles.title}>上级部门</span>
                            </Item>
                        </DepartmentModal>
                    </List>
                    <WhiteSpace />
                    <List renderHeader={() => '危险操作'}>
                        <Item placeholder="选填" onClick={this.handleDelete}>删除部门</Item>
                    </List>
                </Content>
            </Layout>
        )
    }
}


