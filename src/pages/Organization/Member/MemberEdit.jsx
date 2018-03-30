/**
 * 添加员工
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Toast } from 'antd-mobile';

import { fromJS } from 'immutable';
const ObInit = fromJS([])

import Member from './Member'

@connect(state => ({
    departments: state.getIn(['Departments', localStorage.organizationId]),
    inituserlist: state.getIn(['userlist', localStorage.organizationId]) || ObInit,
}))

@withRouter

export default class MemberEdit extends Component {
    constructor(props) {
        super(props)
        let depArr = props.location.state ? props.location.state.depArr : []
        this.state = {
            user: {
                depArr: [].concat(depArr),
            },
        }
    }
    async componentWillMount() {
        let { match } = this.props
        let user = await Request('relation/getUserdet', {
            params: {
                userId: match.params.id
            }
        })
        if (user.success) {
            this.setState({
                user: user.data.detail
            })
        }
    }
    /**
    * 提交保存
    */
    handleSubmit = async (value) => {
        let { id } = this.props.match.params
        let { user } = this.state
        let data = {
            ...user,
            ...value,
        }
        let res = await Request('relation/update', {
            method: 'post',
            data: data,
        })
        if (res.success) {
            let { inituserlist, dispatch } = this.props
            let index = inituserlist.findIndex(dep => {
                return dep.get('userId') == id
            })
            dispatch('userlist/updateIn', [[localStorage.organizationId, index], oldstate => fromJS(data)])
            Toast.info('更新成功', 2);
        } else {
            Toast.info(res.message, 2);
        }
    }
    render() {
        let { user } = this.state
        return (
            <Member data={user} onSubmit={this.handleSubmit} title={'编辑员工'} />
        )
    }
}