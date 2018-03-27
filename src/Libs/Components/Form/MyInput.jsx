import React, { Component } from 'react';

import { Form, Input, Icon } from 'antd';
const FormItem = Form.Item;

// const formItemLayout = {
//     labelCol: {
//         xs: { span: 24 },
//         sm: { span: 6 },
//     },
//     wrapperCol: {
//         xs: { span: 24 },
//         sm: { span: 18 },
//     },
// };

/**
 * 表单输入组件
 * @param {function} getFieldDecorator 验证函数方法  
 * @param {string} type 声明 input 类型，同原生 input 标签的 type 属性，默认值text
 * @param {string} title 表单标题  
 * @param {string} name 表单名
 * @param {string} value 表单值
 * @param {array} rules 数组[]
 * @param {string|ReactNode} addonBefore 带标签的 input，设置前置标签
 * @param {string|ReactNode} addonAfter 带标签的 input，设置后置标签
 * @param {string} prefix 前缀图标
 * @param {string} suffix 后缀图标
 * @param {boolean} disabled 是否禁用状态，默认为 false
 * @param {string} placeholder 
 * @param {boolean} hasFeedback 用于给输入框添加反馈图标,默认ture
 */

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

const myInput = ({ getFieldDecorator, formitemlayout, title, name, value, rules = [], prefix, suffix, addonAfter, hasFeedback = true, ...rest }) => {
    prefix = prefix ? <Icon type={prefix} /> : ''
    suffix = suffix ? <Icon type={suffix} /> : ''
    rules = Array.isArray(rules) ? rules : JSON.parse(rules)
    hasFeedback = addonAfter || suffix ? false : hasFeedback
    let layout = formitemlayout ? formItemLayout : {}
    return (
        <FormItem key={name} label={title} {...layout} hasFeedback={hasFeedback}>
            {getFieldDecorator(name, {
                initialValue: value || '',
                rules: rules
            })(<Input prefix={prefix} suffix={suffix} addonAfter={addonAfter} {...rest} />)
            }
        </FormItem>
    )
}

export default myInput;