import React, { Component } from "react";

import styles from "./TextEditor.scss";
import UploadBtn from "./UploadBtn";
export default class TextEditor extends Component {
    constructor() {
        super();
        this.lastEditRange = 0;
        this.state = {
            data: ""
        };
    }
    componentDidMount() {
        this.initInnerHtml();
    }
    initInnerHtml = () => {
        let { value } = this.props;
        if (value) {
            this.texta.innerHTML = value;
        }
    };
    initFocusSelection = strongNode => {
        if (window.getSelection) {
            //ie11 10 9 ff safari
            // this.texta.focus(); //解决ff不获取焦点无法定位问题
            let range = window.getSelection(); //创建range
            range.selectAllChildren(strongNode); //range 选择obj下所有子内容
            range.collapseToEnd(); //光标移至最后
        } else if (document.selection) {
            //ie10 9 8 7 6 5
            let range = document.selection.createRange(); //创建选择对象
            range.moveToElementText(strongNode); //range定位到obj
            range.collapse(false); //光标移至最后
            range.select();
        }
    };
    handleChange = e => {
        this.handleSelection();
        this.setState({
            data: e.target.innerHTML
        });
    };
    handleSelection = () => {
        let selection = getSelection();
        // 设置最后光标对象
        if (selection.anchorNode && selection.anchorNode.nodeName == "#text") {
            this.lastEditRange = selection.getRangeAt(0);
        }
    };

    handleUploadImg = (name, value) => {
        if (!value) {
            return;
        }
        value = JSON.parse(value);
        console.log(value);

        value.map(v => {
            this.handleChatu(v.path);
        });
    };
    handleChatu = imgsrc => {
        let selection = getSelection();
        // 判断是否有最后光标对象存在
        if (this.lastEditRange) {
            // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
            selection.removeAllRanges();
            selection.addRange(this.lastEditRange);
        }
        console.log(selection);
        let strongNode = document.createElement("div");
        let strongNodeDiv = document.createElement("div");
        let img = new Image();
        img.src = imgsrc;
        strongNode.appendChild(img);
        if (!selection.anchorNode || selection.anchorNode.nodeName != "#text") {
            this.texta.appendChild(strongNode);
        } else {
            let range = selection.getRangeAt(0);
            range.insertNode(strongNode);
        }
        this.initFocusSelection(strongNode);
        // if (!selection.anchorNode || selection.anchorNode.nodeName != "#text") {
        //     this.texta.appendChild(strongNodeDiv);
        // } else {
        //     let range = selection.getRangeAt(0);
        //     range.insertNode(strongNodeDiv);
        // }
        // this.initFocusSelection(strongNodeDiv);
    };
    render() {
        let { value } = this.props;
        let { data } = this.state;
        return (
            <div className={styles.TextEditor}>
                <div className={styles.title}>*公告内容</div>
                <div
                    className={styles.texta}
                    ref={ele => (this.texta = ele)}
                    onClick={this.handleSelection}
                    onInput={this.handleChange}
                    contentEditable="true"
                />
                <div className={styles.btns}>
                    {/* <div className={styles.btn} onClick={this.handleChatu2}>
                        插入图片
                    </div> */}
                    <UploadBtn onChange={this.handleUploadImg} name="uploadimg" isone={true} />
                </div>
            </div>
        );
    }
}
