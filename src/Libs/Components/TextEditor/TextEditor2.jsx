import React, { Component } from "react";
import styles from "./TextEditor.scss";
export default class componentName extends Component {
    componentDidMount() {
        var artEditor = new Eleditor({
            el: "#article-body",
            placeHolder: "编辑公告内容",
            uploader: function() {
                /*必须返回一个Promise对象，成功返回url，失败返回错误信息*/
                return new Promise(function(_resolve, _reject) {
                    _resolve("http://localhost:3113/public/images/icon_02.png");
                });
            }
        });
    }
    render() {
        return <div id="article-body" className={styles.texta} />;
    }
}
