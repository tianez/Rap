import React, { Component } from 'react'

import { Icon } from "antd";

import styles from './Attachment.scss'

class Attachment extends Component {
    static defaultProps = {
        value: []
    }
    constructor(props) {
        super(props);
        this.state = {
            attachments: [].concat(props.value),
            files: {}
        }
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
        let { attachments, files } = this.state
        let _id = attachments.length
        files[_id] = file
        attachments.push({
            name: file.name,
            size: file.size,
            type: file.type,
            state: 1,//1：上传中，2：上传失败，3：上传成功，
        })
        this.setState({ attachments, files })
        let formdata = new FormData();
        formdata.append('uploadFile', file);
        let res = await Request('fileUpload.jspx', {
            method: 'post',
            data: formdata
        })
        if (res.success) {
            attachments[_id].state = 3
            attachments[_id].path = res.data.uploadPath
            this.setState({ attachments })
        } else {
            attachments[_id].state = 2
            this.setState({ attachments })
        }
        this.handleChange()
    }
    handleDel = (e) => {
        let index = e.target.getAttribute('index')
        let { attachments, files } = this.state
        attachments.splice(index, 1)
        delete files[index];
        this.setState({ attachments, files })
        this.handleChange()
    }
    handleChange = () => {
        let { onChange, name } = this.props
        let { attachments } = this.state
        let value = []
        attachments.map(attachment => {
            if (attachment.state == 3 || !attachment.state) {
                value.push({
                    size: attachment.size,
                    name: attachment.name,
                    type: attachment.type,
                    path: attachment.path,
                })
            }
        })
        onChange && onChange(name, value)
    }
    render() {
        let { attachments, files } = this.state
        return (
            <div>
                <div className={styles.uploaddiv}>
                    <div className={styles.uploadtitle}>添加附件</div>
                    <div className={styles.uploadfile}>
                        <div className={styles.uploadbtn}>附件上传</div>
                        <input className={styles.uploadipt} multiple type="file" onChange={this.handleFileChange} />
                    </div>
                </div>
                <div className={styles.files}>
                    {attachments.map((att, index) => {
                        return (
                            <div className={styles.file + ' ' + (att.state == 2 && styles.fileerror)}>
                                {att.state == 1 ? <Icon type="loading" /> : <Icon type="paper-clip" />}
                                <div className={styles.filename}>{att.name}</div>
                                <Size size={att.size} />
                                <div className={styles.filedel} index={index} title='移除文件' onClick={this.handleDel}>×</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Attachment

const Size = ({ size }) => {
    let tip = size < 1024 ? size + 'B' :
        size < 1024 * 1024 ? (size / 1024).toFixed(2) + 'KB' :
            size < 1024 * 1024 * 1024 ? (size / 1024 / 1024).toFixed(2) + 'MB' :
                size < 1024 * 1024 * 1024 * 1024 ? (size / 1024 / 1024 / 1024).toFixed(2) + 'GB' :
                    size + 'B'
    return <div className={styles.filesize}>{tip}</div>
}