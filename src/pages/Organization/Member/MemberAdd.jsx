/**
 * 添加员工
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Toast } from 'antd-mobile';

import { fromJS } from 'immutable';
const ObInit = fromJS([])

import Form from 'Components/Form/Form'

class MemberAdd extends Component {
    constructor(props) {
        super(props)
        let depArr = props.location.state ? props.location.state.depArr : []
        this.state = {
            user: {
                depArr: [].concat(depArr),
            },
        }
    }
    handleSubmit = (value) => {
        console.log(value);
    }
    render() {
        let { user } = this.state
        return (
            <Member data={user} onSubmit={this.handleSubmit} title={'添加员工'} />
        )
    }
}

export default withRouter(MemberAdd)
