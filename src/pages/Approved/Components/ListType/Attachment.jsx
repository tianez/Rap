import React, { Component } from 'react'

import styles from './Attachment.scss'

export default class Attachment extends Component {
    render() {
        let { filedTitle, filedValue } = this.props
        console.log(filedValue);
        if (!filedValue) {
            return null
        }
        let attachments = JSON.parse(filedValue)
        if (attachments.length == 0) {
            return null
        }
        // let attachments = [{
        //     path:'http://imgfile.estv.com.cn/estv/1.docx',
        //     name:'docx',
        //     size:'10256',
        // },{
        //     path:'http://imgfile.estv.com.cn/estv/1.txt',
        //     name:'txt',
        //     size:'10256',
        // }]
        return (
            <div className={styles.attachments}>
                <div className={styles.title}>{filedTitle || '附件'}</div>
                <div className={styles.lists} >
                    {attachments.map((attachment, index) => {
                        return (
                            <a key={index} href={attachment.path} download className={styles.list}>
                                <span className={'iconfont icon-fujian ' + styles.tb}></span>
                                <span className={styles.name}>{attachment.name}</span>
                                <div className={styles.size}>{size(attachment.size)}</div>
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const size = (size) => {
    let tip = size < 1024 ? size + 'B' :
        size < 1024 * 1024 ? (size / 1024).toFixed(2) + 'KB' :
            size < 1024 * 1024 * 1024 ? (size / 1024 / 1024).toFixed(2) + 'MB' :
                size < 1024 * 1024 * 1024 * 1024 ? (size / 1024 / 1024 / 1024).toFixed(2) + 'GB' :
                    size + 'B'
    return tip
}