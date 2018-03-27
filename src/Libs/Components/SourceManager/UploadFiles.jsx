/**
 * 远程图片列表
 */

import React from 'react'
import styles from './UploadFiles.scss'

const UploadFiles = ({ attachments, onClick }) => {
    let uploadingFiles = attachments.filter(atc => {
        return atc.state == 1
    })
    let errorFiles = attachments.filter(atc => {
        return atc.state == 2
    })
    let successFiles = attachments.filter(atc => {
        return atc.state == 3
    })
    return (
        <div className={styles.files}>
            <div className={styles.title}>正在上传</div>
            <FileList attachments={uploadingFiles} />
            <div className={styles.title}>上传出错</div>
            <FileList attachments={errorFiles} />
            <div className={styles.title}>上传成功</div>
            <FileList attachments={successFiles} onClick={onClick} />
        </div>
    )
}

export default UploadFiles

const FileList = ({ attachments, ...rest }) => (
    <div className={styles.images}>
        {attachments.map((img, index) => {
            return <img key={img.uploadPath} {...rest} src={img.uploadPath} imgsrc={img.uploadPath} className={styles.file} />
        })}
        <div className="clear"></div>
    </div>
)