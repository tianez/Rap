/**
 * 资源管理
 */

import React, { Component } from 'react'
import UploadBtn from './UploadBtn'
import UploadFiles from './UploadFiles'
import Images from './Images'

import styles from './SourceLists.scss'

class SourceLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attachments: [],
            files: {},
        }
    }

    handleUploadChange = ({ attachments, files }) => {
        this.setState({
            attachments,
            files,
        })
    }
    render() {
        let { style, onBack, onSelect } = this.props
        let { attachments, files } = this.state
        return (
            <div className={styles.lists}>
                <div className={styles.status}>
                    <UploadBtn attachments={attachments} files={files} onUploadChange={this.handleUploadChange} />
                </div>
                <UploadFiles attachments={attachments} onClick={onSelect} />
                <Images onClick={onSelect} />
            </div>
        )
    }
}

export default SourceLists