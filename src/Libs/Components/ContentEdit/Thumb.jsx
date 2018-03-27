import React, { Component } from "react";
import ReactDOM from "react-dom";

import styles from "./Thumb.scss";

import asyncComponent from "Extended/asyncComponent";
const CropperImage = asyncComponent(() => import("Components/CropperImage/CropperImage"));
const Img = asyncComponent(() => import("Components/Img/Img"));

class Thumb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    handleShow = () => {
        this.setState({
            show: true
        });
    };
    handleHide = () => {
        this.setState({
            show: false
        });
    };
    handleChange = (imgsrc, cropperSrc) => {
        this.setState({
            cropperSrc,
            show: false
        });
        let { name, onChange } = this.props;
        onChange && onChange(name, imgsrc);
    };
    handleDel = () => {
        this.handleChange(null);
    };
    render() {
        let { show, cropperSrc } = this.state;
        let { imgsrc, className } = this.props;
        console.log(imgsrc);
        return (
            <div className={className}>
                {imgsrc ? (
                    <div className={styles.preview}>
                        <Img className={styles.preimg} src={cropperSrc || imgsrc} />
                        <div className={styles.edit}>
                            <div className={styles.rechoose} onClick={this.handleShow}>
                                重新选择
                            </div>
                            {/* <div className={styles.delete} onClick={this.handleDel} >删除</div> */}
                        </div>
                    </div>
                ) : (
                    <div onClick={this.handleShow} className={styles.uploadbtn}>
                        <div className={"iconfont icon-tianjiatupian " + styles.uploadtit} />
                    </div>
                )}
                {show
                    ? ReactDOM.createPortal(
                          <CropperImage onHide={this.handleHide} onChange={this.handleChange} />,
                          document.getElementById("root")
                      )
                    : null}
            </div>
        );
    }
}

export default Thumb;
