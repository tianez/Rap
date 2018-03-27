import React, { Component } from 'react'

import styles from './UploadBtn.scss'

class UploadBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    /**
        * 选择框选取文件
        */
    handleFileChange = (e) => {
        let files = e.target.files
        for (let index = 0; index < files.length; index++) {
            this.handleFileUpload(files[index])
        }
    }
    /**
     * 上传操作
     */
    handleFileUpload = async (file) => {
        let { files, attachments, onUploadChange } = this.props
        let _id = attachments.length
        files[_id] = file
        attachments.push({
            name: file.name,
            size: file.size,
            type: file.type,
            state: 1,//1：上传中，2：上传失败，3：上传成功，
        })
        onUploadChange({ attachments, files })
        let formdata = new FormData();
        formdata.append('uploadFile', file);
        let res = await Request('imageUpload.jspx', {
            method: 'post',
            data: formdata
        })
        if (res.success) {
            attachments[_id].state = 3
            attachments[_id].uploadPath = res.data.uploadPath
        } else {
            attachments[_id].state = 2
        }
        onUploadChange({ attachments, files })
    }
    render() {
        return (
            <div className={styles.uploadBtn}>
                <span>本地上传</span>
                <input onChange={this.handleFileChange} className={styles.uploadIpt} multiple type="file" />
            </div>
        )
    }
}

export default UploadBtn
