import React, { Component } from "react";

import styles from "./TextEditor.scss";
import UploadBtn from "./UploadBtn";
export default class TextEditor extends Component {
    constructor() {
        super();
        this.lastEditRange = 0;
        this.state = {
            data: ""
        };
    }
    componentDidMount() {
        this.initInnerHtml();
    }
    initInnerHtml = () => {
        let { value } = this.props;
        if (value) {
            this.texta.innerHTML = value;
        }
    };

    handleChange = e => {
        this.setState({
            data: e.target.innerHTML
        });
        let { onChange } = this.props;
        onChange && onChange("content", e.target.innerHTML);
    };
    render() {
        return (
            <div
                className={styles.texta}
                ref={ele => (this.texta = ele)}
                onClick={this.handleSelection}
                onInput={this.handleChange}
                contentEditable="true"
            />
        );
    }
}
