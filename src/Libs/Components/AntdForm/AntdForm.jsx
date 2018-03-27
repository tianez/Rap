import React, { Component } from "react";
import { Form, Button, message } from "antd";
const { Item } = Form;

import ListForm from "./ListForm";
import formValidator from "Utils/formValidator";

class AntdForm extends Component {
    static defaultProps = {
        btnShow: true,
        btnTile: "提交保存",
        btnLoading: false
    };
    constructor(props) {
        super(props);
        this.state = {
            data: {
                ...props.data
            }
        };
    }
    componentDidMount() {
        let { fields } = this.props;
        let { data } = this.state;
        let newdata = {};
        fields.map(d => {
            newdata[d.name] = d.defaultValue;
        });
        this.setState({
            data: {
                ...newdata,
                ...data
            }
        });
    }
    // componentDidUpdate() {
    //     let { data, onChange } = this.props;
    //     if (!onChange && data != this.props.data) {
    //         this.setState({
    //             data: { ...data }
    //         });
    //     }
    // }
    // componentWillReceiveProps(nextProps) {
    //     let { data, onChange } = nextProps;
    //     if (!onChange && data != this.props.data) {
    //         this.setState({
    //             data: { ...data }
    //         });
    //     }
    // }
    /**
     * 提交表单
     */
    handleSubmit = () => {
        let { fields, onSubmit, onChange, data } = this.props;
        data = onChange ? data : this.state.data;
        console.log(data);
        console.log(fields);
        let initdata = {};
        fields.map(f => {
            if (f.defaultValue) {
                initdata[f.name] = f.defaultValue;
            }
        });
        data = Object.assign(initdata, data);
        let res = formValidator(fields, data);
        if (res.length > 0) {
            message.warning(res[0], 2);
            return null;
        }
        onSubmit && onSubmit(data);
        return data;
    };
    handleChange = (name, value) => {
        let { onChange } = this.props;
        if (onChange) {
            let { data } = this.props;
            data[name] = value;
            onChange(data);
        } else {
            let { data } = this.state;
            data[name] = value;
            this.setState({ data });
        }
    };
    render() {
        let { children, onChange, fields, data, btnShow, btnTile, btnLoading } = this.props;
        data = onChange ? data : this.state.data;
        return (
            <div>
                <ListForm fields={fields} data={data} onChange={this.handleChange} />
                {children}
                {btnShow && (
                    <Item>
                        <Button onClick={this.handleSubmit} type="primary" loading={btnLoading}>
                            {btnTile}
                        </Button>
                    </Item>
                )}
            </div>
        );
    }
}

export default AntdForm;
