import React, { Component } from 'react'

import styles from './MultiMap.scss'

class MultiMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attachments: props.value || [],
            files: {},
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
        let bloburl = URL.createObjectURL(file);
        let _id = attachments.length
        files[_id] = file
        attachments.push({
            name: file.name,
            size: file.size,
            type: file.type,
            bloburl: bloburl,
            description: file.name,
            state: 1,//1：上传中，2：上传失败，3：上传成功，
        })
        this.setState({ attachments, files })
        let formdata = new FormData();
        formdata.append('uploadFile', file);
        let res = await Request('imageUpload.jspx', {
            method: 'post',
            data: formdata
        })
        if (res.success) {
            attachments[_id].state = 3
            attachments[_id].imgPath = res.data.uploadPath
        } else {
            attachments[_id].state = 2
        }
        this.setState({ attachments, files })
        this.handleChange()
    }

    handlePreview = (e) => {
        let index = e.target.getAttribute('index')
        this.setState({
            curindex: index,
        })
    }
    handleTextareaChange = (e) => {
        let { attachments, curindex } = this.state
        attachments[curindex].description = e.target.value
        this.setState({
            attachments
        })
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
                    name: attachment.name,
                    size: attachment.size,
                    imgPath: attachment.imgPath,
                    description: attachment.description,
                })
            }
        })
        onChange && onChange(name, value)
    }
    render() {
        let { attachments, curindex } = this.state
        return (
            <div className={styles.multimap}>
                <div className={styles.premaxview}>
                    {attachments[curindex] && <PreViews attachment={attachments[curindex]} onChange={this.handleTextareaChange} />}
                </div>
                <div className={styles.imglist}>
                    <UploadFile onChange={this.handleFileChange} />
                    {attachments.map((attachment, index) => {
                        return <div className={styles.preview + ' ' + (curindex == index && styles.previewcur)}>
                            <img index={index} onClick={this.handlePreview} className={styles.previewimg} src={attachment.bloburl || attachment.imgPath} />
                            <State state={attachment.state} />
                            <div onClick={this.handleDel} index={index} className={'iconfont icon-hengxian ' + styles.delete}></div>
                        </div>
                    })}
                    <div className="clear"></div>
                </div>
            </div>
        )
    }
}

export default MultiMap

const PreViews = ({ attachment, onChange }) => (
    <div>
        <img className={styles.viewimg} src={attachment.bloburl} />
        <textarea onChange={onChange} value={attachment.description || ''} className={styles.textarea} placeholder='请输入图片描述' rows="3"></textarea>
    </div>
)

const UploadFile = ({ onChange }) => (
    <div className={'iconfont icon-tianjiatupian ' + styles.upbtn}>
        <input type="file" onChange={onChange} multiple className={styles.upipt} />
    </div>
)

const State = ({ state }) => (
    <div className={styles.imgstate}>
        {state == 1 ?
            <div className={styles.success}>上传中</div> :
            state == 2 ?
                <div className={styles.error}>上传失败</div> :
                state == 3 ?
                    <div className={styles.success}>上传成功</div> :
                    <div className={styles.success}>已上传</div>}
    </div>
)