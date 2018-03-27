import React, { Component } from "react";

import styles from "./Text.scss";

export default class ExportComponent extends Component {
    constructor() {
        super();
        this.lastEditRange = 0;
    }
    componentDidMount() {
        this.initInnerHtml();
    }
    initInnerHtml = () => {
        let value = "<div>222222222222222</div>";
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
        console.log(e.target.innerHTML);
    };
    handleSelection = () => {
        let selection = getSelection();
        // 设置最后光标对象
        if (selection.anchorNode && selection.anchorNode.nodeName == "#text") {
            this.lastEditRange = selection.getRangeAt(0);
        }
    };
    handleChatu2 = () => {
        let selection = getSelection();
        // 判断是否有最后光标对象存在
        if (this.lastEditRange) {
            // 存在最后光标对象，选定对象清除所有光标并添加最后光标还原之前的状态
            selection.removeAllRanges();
            selection.addRange(this.lastEditRange);
        }
        console.log(selection);
        let strongNode = document.createElement("div");
        let img = new Image();
        img.src =
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522503359&di=b9504bc3cc2fcb15134c9a9f4d0e7de7&imgtype=jpg&er=1&src=http%3A%2F%2Fimage2.92bizhi.com%2Fmovie_spider-man-3_05-1024x768.jpg";
        strongNode.appendChild(img);
        if (!selection.anchorNode || selection.anchorNode.nodeName != "#text") {
            this.texta.appendChild(strongNode);
            console.log("12");
        } else {
            // 如果是文本节点则先获取光标对象
            let range = selection.getRangeAt(0);
            range.insertNode(strongNode);
        }
        this.initFocusSelection(strongNode);
    };
    render() {
        return (
            <div>
                <button onClick={this.handleChatu}>插入图片</button>
                <button onClick={this.handleChatu2}>插入图片</button>
                <div
                    className={styles.texta}
                    ref={ele => (this.texta = ele)}
                    onClick={this.handleSelection}
                    onInput={this.handleChange}
                    contentEditable="true"
                />
            </div>
        );
    }
}
