import React, { Component } from "react";
import { Form } from "antd";
const { Item } = Form;

import styles from "./ImagesItem.scss";

import uploadAttachment from "./action/uploadAttachment";

@uploadAttachment
export default class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleFileChange = e => {
        let { onFileChange } = this.props;
        onFileChange && onFileChange(e);
        this.inputfile.value = "";
    };
    render() {
        let { field, attachments, value, multiple } = this.props;
        return (
            <Item label={field.title}>
                <div className={styles.attachments}>
                    <div className={styles.lists}>
                        {attachments.length > 0 &&
                            attachments.map((attachment, index) => {
                                return (
                                    <div
                                        className={styles.list}
                                        key={index}
                                        data-index={index}
                                        onClick={this.handleCarouselShow}
                                        style={{ backgroundImage: "url(" + attachment.bloburl + ")" }}
                                    >
                                        <span
                                            onClick={this.props.onDel}
                                            data-index={index}
                                            className={"iconfont icon-chuyidong " + styles.del}
                                        />
                                    </div>
                                );
                            })}
                        <div className={styles.list}>
                            <div className={"iconfont icon-tupian " + styles.uploadbtn}>
                                <input
                                    ref={ele => (this.inputfile = ele)}
                                    className={styles.filebtn}
                                    type="file"
                                    accept="image/gif,image/jpeg,image/jpg,image/png"
                                    multiple={multiple}
                                    onChange={this.handleFileChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Item>
        );
    }
}
