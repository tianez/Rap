import React, { Component } from 'react'
import { Form, Checkbox } from 'antd';
const { Item } = Form;
const CheckboxGroup = Checkbox.Group;

import handleChange from './action/handleChange';
@handleChange
export default class CheckboxItem extends Component {
    render() {
        let { onChange, field, value } = this.props
        return (
            <Item label={field.title}>
                <CheckboxGroup defaultValue={value} style={{ width: '100%' }} onChange={onChange}>
                    {field.opts && field.opts.map(opt => {
                        return <Checkbox key={opt.key} value={opt.key}>{opt.title}</Checkbox>
                    })}
                </CheckboxGroup>
            </Item>
        )
    }
}
