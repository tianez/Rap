import React, { Component } from "react";
import styles from "./TextEditor.scss";
import uploadAttachment from "Hoc/uploadAttachment";
@uploadAttachment
export default class UploadBtn extends Component {
    handleFileChange = e => {
        let { onFileChange } = this.props;
        onFileChange && onFileChange(e);
        this.inputfile.value = "";
    };
    render() {
        return (
            <div className={styles.uploadbtn}>
                上传图片
                <input
                    ref={ele => (this.inputfile = ele)}
                    className={styles.btn}
                    type="file"
                    accept="image/gif,image/jpeg,image/jpg,image/png"
                    multiple
                    onChange={this.handleFileChange}
                />
            </div>
        );
    }
}
