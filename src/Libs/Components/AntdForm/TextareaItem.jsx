import React, { Component } from 'react'
import { Form, Input } from 'antd';
const { Item } = Form;
const { TextArea } = Input;

import handleChange from './action/handleChange';

const TextareaItem = ({ field, value, type = 'text', onChange }) => (
    <Item label={field.title}>
        <TextArea onChange={e => onChange(e.target.value)}  rows={4} value={value} placeholder={field.placeholder} />
    </Item>
)

export default handleChange(TextareaItem) 