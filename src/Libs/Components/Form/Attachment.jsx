import React, { Component } from "react";

import styles from "./Attachment.scss";

import uploadAttachment from "Hoc/uploadAttachment";

@uploadAttachment
export default class Attachment extends Component {
    handleFileChange = e => {
        let { onFileChange } = this.props;
        onFileChange && onFileChange(e);
        this.inputfile.value = "";
    };
    render() {
        let { field, attachments, value, onChange, size } = this.props;
        return (
            <div className={styles.attachments}>
                <div className={styles.title}>
                    {field.title}
                    {field.tip && <span className={styles.tip}>{field.tip}</span>}
                </div>
                <div className={"iconfont icon-fujian " + styles.uploadbtn}>
                    <input
                        className={styles.filebtn}
                        ref={ele => (this.inputfile = ele)}
                        type="file"
                        multiple
                        onChange={this.handleFileChange}
                    />
                </div>
                {attachments.length > 0 && (
                    <div className={styles.lists}>
                        {attachments.map((attachment, index) => {
                            return (
                                <div className={styles.list} key={index}>
                                    <span className={"iconfont icon-fujian " + styles.tb} />
                                    <span className={styles.name}>{attachment.name}</span>
                                    <div className={styles.size}>{size(attachment.size)}</div>
                                    <span
                                        onClick={this.props.onDel}
                                        data-index={index}
                                        className={"iconfont icon-chuyidong " + styles.del}
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}
