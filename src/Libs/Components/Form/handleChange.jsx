/**
 * 高阶函数
 * 监测表单项变化
 */
import React, { Component } from "react";

const handleChange = Component =>
    class extends React.Component {
        handleChange = value => {
            let { onChange, field, name } = this.props;
            onChange && onChange(name || field.name, value);
        };
        render() {
            return <Component {...this.props} onChange={this.handleChange} />;
        }
    };

export default handleChange;
