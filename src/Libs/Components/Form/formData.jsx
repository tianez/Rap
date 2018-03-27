import React, { Component } from 'react'

import { Row, Form, Button } from 'antd';
const FormItem = Form.Item;
import MyInput from './MyInput'

import { Title, Ueditor, TextArea, Cascader, TreeSelect, DatePicker } from './index'

/**
 * 根据传入参数自动生成表单
 * @param {object} detail 默认数据
 * @param {object} fileds 表单项数据
 */

class formData extends React.Component {
    static defaultProps = {
        detail: {}
    }
    constructor(props) {
        super(props);
        this.state = {
            info: props.detail,
        }
    }
    componentWillReceiveProps(nextProps) {
        let { detail } = nextProps
        if (detail !== this.props.detail) {
            this.setState({ info: detail })
        }

    }
    /**
     * 表单数据变化
     */
    handleChange = (name, value) => {
        let info = this.state.info
        info[name] = value
        this.setState({ info: info })
    }

    /**
     * 提交表单处理函数
     */
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let data = Object.assign(this.state.info, values)
                this.props.handleSubmit && this.props.handleSubmit(data);
            }
        })
    }
    render() {
        let { fileds, detail = {}, form, children } = this.props
        let { info } = this.state
        let { getFieldDecorator } = form
        const filedGroups = data => data.map((item, index) => {
            let child = {
                ...item,
                key: item.name,
                value: info[item.name] || item.value
            }
            switch (item.type) {
                case 'ueditor':
                    return <Ueditor {...child} onChange={this.handleChange} />
                    break;
                case 'title':
                    return <Title {...child} onChange={this.handleChange} />
                    break;
                case 'text':
                    return <MyInput getFieldDecorator={getFieldDecorator}  {...child} />
                    break;
                case 'textarea':
                    return <TextArea {...child} onChange={this.handleChange} />
                    break;
                case 'email':
                    return <MyInput getFieldDecorator={getFieldDecorator}  {...child} />
                    break;
                case 'password':
                    return <MyInput getFieldDecorator={getFieldDecorator}  {...child} />
                    break;
                case 'cascader':
                    return <Cascader {...child} />
                case 'treeSelect':
                    return <TreeSelect {...child} />
                    break;
                case 'datePicker':
                    return <DatePicker {...child} />
                    break;
                default:
                    return null
                    break;
            }
        })
        return (
            <Form className='setting' onSubmit={this.handleSubmit}>
                {fileds && fileds.length > 0 && filedGroups(fileds)}
                {children}
            </Form>
        );
    }
}

export default Form.create()(formData)