/**
 * 表单通用
 */

import React, { Component } from 'react'
import { createForm } from 'rc-form';
import { NavBar, Icon, List, InputItem, TextareaItem, ImagePicker, Toast, Button, WhiteSpace } from 'antd-mobile';
const Item = List.Item;

import Layout from 'Components/Layout/Layout'
import Content from 'Components/Layout/Content'

import ListForm from './ListForm';

import styles from './Form.scss';

@createForm()

export default class Form extends Component {
    static defaultProps = {
        rightTitle: '完成',
    }
    constructor(props) {
        super(props)
        this.state = {
            data: {
                ...props.data
            },
        }
    }
    componentWillReceiveProps(nextProps) {
        let { data } = nextProps
        if (data != this.props.data) {
            this.setState({
                data: {
                    ...data
                },
            })
        }
    }
    /**
    * 提交表单
    */
    handleSubmit = () => {
        this.props.form.validateFields((error, value) => {
            console.log(value);
            console.log(error);
            if (error) {
                for (const key in error) {
                    return Toast.info(error[key].errors[0].message, 2);
                }
                return
            }
            let { onSubmit } = this.props
            onSubmit && onSubmit({
                ...value,
                // ...this.state.data
            })
        });
    }
    handleChange = (name, value) => {
        let { data } = this.state
        data[name] = value
        this.setState({ data })
    }
    render() {
        let { title, datajson, rightTitle } = this.props
        const { getFieldProps } = this.props.form;
        let { data } = this.state
        return (
            <Layout>
                <NavBar mode="light"
                    icon={<Icon type="left" size='lg' />}
                    onLeftClick={() => window.history.back()}
                    rightContent={<span onClick={this.handleSubmit}>{rightTitle}</span>}>{title}</NavBar>
                <Content>
                    {datajson.map((json, index) => {
                        if (json.type == 'WhiteSpace') {
                            return <WhiteSpace key={index} />
                        }
                        return <ListForm key={index} getFieldProps={getFieldProps} json={json} data={data} onChange={this.handleChange} />
                    })}
                    <WhiteSpace />
                </Content>
            </Layout>
        )
    }
}