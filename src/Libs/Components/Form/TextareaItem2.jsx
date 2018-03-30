import React, { Component } from "react";
import { TextareaItem } from "antd-mobile";
import handleChange from "./handleChange";

import styles from "./Form.scss";

class ExportComponent extends Component {
    componentDidMount() {
        let { value } = this.props;
        if (value) {
            this.texta.innerHTML = value;
        }
    }
    render() {
        let { field, value, onChange } = this.props;
        return (
            <div className="am-list-item am-textarea-item">
                <div className="am-textarea-label am-textarea-label-5">{field.title}</div>
                <div className="am-textarea-control">
                    <div
                        ref={ele => (this.texta = ele)}
                        onInput={e => {
                            console.log(e.target.innerHTML);
                            onChange(e.target.innerHTML);
                        }}
                        contentEditable="true"
                        className={styles.textare2}
                    />
                </div>
            </div>
        );
    }
}

export default handleChange(ExportComponent);
