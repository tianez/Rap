import React, { Component } from "react";

import { Form } from "antd";
const { Item } = Form;
import styled from "styled-components";

const TextareaView = styled.div`
    width: 100%;
    min-height: 58px;
    padding: 6px 11px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    line-height: 22px;
`;

import styles from "./TextareaItem2.scss";

import handleChange from "./action/handleChange";

class ExportComponent extends Component {
    componentDidMount() {
        let { value } = this.props;
        if (value) {
            this.texta.innerHTML = value;
        }
    }
    render() {
        let { field, onChange } = this.props;
        return (
            <Item label={field.title}>
                <div
                    className={styles.textarea}
                    ref={ele => (this.texta = ele)}
                    onInput={e => {
                        onChange(e.target.innerHTML);
                    }}
                    contentEditable="true"
                />
            </Item>
        );
    }
}

export default handleChange(ExportComponent);
