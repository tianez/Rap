/**
 * 表单通用
 */

import React, { Component } from "react";
import ListForm from "./ListForm";

export default class Form extends Component {
    static defaultProps = {
        fields: $arr,
        data: $obj
    };
    constructor(props) {
        super(props);
        this.state = {
            data: $obj
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        let { fields, data } = nextProps;
        let initdata = $obj;
        fields.map(f => {
            if (f.defaultValue || f.defaultValue == 0 || f.defaultValue == false) {
                initdata = initdata.set(f.name, f.defaultValue);
            }
        });
        data = initdata.merge(data);
        return { data };
    }
    handleChange = (name, value) => {
        let { onChange } = this.props;
        let { data } = this.state;
        data = $obj.merge(data);
        data = data.set(name, value);
        if (onChange) {
            onChange(data);
        } else {
            this.setState({ data });
        }
    };
    render() {
        let { fields, title } = this.props;
        let { data } = this.state;
        return <ListForm fields={fields} data={data} onChange={this.handleChange} title={title} />;
    }
}
