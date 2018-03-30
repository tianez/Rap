import React, { Component } from 'react'

import { List, WhiteSpace } from 'antd-mobile';

import Departments from './Departments';
import Organization from './Organization';
import DatePicker from './DatePicker';
import InputItem from './InputItem';
import TextareaItem from './TextareaItem';
import TextareaItem2 from './TextareaItem2';
import Switch from './Switch';
import Radio from './Radio';
import Slider from './Slider';
import Select from './Select';
import Attachment from './Attachment';
import Images from './Images';
import PickerCity from './PickerCity';

import styles from './Form.scss';

const ListForm = ({ getFieldProps, json, data = {}, onChange }) => {
    let D = json.listTitle ? ListHeader : ListNoHeader
    return (
        <D title={json.listTitle}>
            {json.fields.map((field, index) => {
                let props = {
                    getFieldProps,
                    field,
                    onChange,
                    value: data[field.name],
                    key: field.name,
                }
                switch (field.type) {
                    case 'datepicker':
                        return <DatePicker {...props} />
                        break;
                    case 'text':
                        return <InputItem {...props} />
                        break;
                    case 'textarea':
                        return <TextareaItem {...props} />
                        break;
                    case 'switch':
                        return <Switch {...props} />
                        break;
                    case 'radio':
                        return <Radio {...props} />
                        break;
                    case 'slider':
                        return <Slider {...props} />
                        break;
                    case 'select':
                        return <Select {...props} />
                        break;
                    case 'pickercity':
                        return <PickerCity {...props} />
                        break;
                    case 'attachment':
                        return <Attachment image={false} {...props} />
                        break;
                    case 'images':
                        return <Images {...props} />
                        break;
                    case 'departments':
                        return <Departments {...props} multiple={field.multiple} />
                        break;
                    case 'organizations':
                        return <Organization {...props} {...field} />
                        break;
                    case 'WhiteSpace':
                        return <WhiteSpace key={index} className={styles.whiteSpace} />
                        break;
                    default:
                        return null
                        break;
                }
            })}
        </D>
    )
}

export default ListForm

const ListHeader = ({ title, children }) => {
    return (
        <List renderHeader={() => title}>
            {children}
        </List>
    )
}

const ListNoHeader = ({ children }) => {
    return (
        <List>
            {children}
        </List>
    )
}