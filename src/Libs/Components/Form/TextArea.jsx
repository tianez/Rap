import React, { Component } from 'react'
import { Form, Input } from 'antd';
const { TextArea } = Input;
const { Item } = Form;

class MyTextArea extends Component {
    handleChange = (e) => {
        let { name, value } = this.props
        let val = e.target.value.trim()
        if (val == value) {
            return
        }
        this.props.onChange(name, val)
    }
    render() {
        let { title, ...props } = this.props
        return (
            <Item label={title} >
                <TextArea autosize={true} {...props} onChange={this.handleChange} />
            </Item>
        )
    }
}

export default MyTextArea