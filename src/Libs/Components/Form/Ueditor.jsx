'use strict'

import React, { Component, PropTypes } from 'react'

class Ueditor extends Component {
    static defaultProps = {
        value: ''
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.ueditor = UE.getEditor('ueditor_' + this.props.name, {
            autoHeightEnabled: true,
            autoFloatEnabled: false,
            initialFrameHeight: this.props.initialFrameHeight || 400,
        });
        this.ueditor.ready(() => this.handleReady(this.props));
    }

    handleReady = (props) => {
        this.ueditor.setContent(props.value);
        if (props.onChange) {
            this.ueditor.addListener('contentChange', () => this.handleChange())
        }
    }

    handleChange = () => {
        let html = this.ueditor.getContent();
        this.props.onChange(this.props.name, html)
    }

    componentWillUnmount() {
        this.ueditor.destroy();
    }

    render() {
        return (
            <textarea id={'ueditor_' + this.props.name} style={{ width: '100%' }}></textarea>
        )
    }
}

export default Ueditor