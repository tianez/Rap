import React, { Component } from "react";
import { Carousel } from "antd-mobile";

import styles from "./Images.scss";

import uploadAttachment from "Hoc/uploadAttachment";

@uploadAttachment
export default class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            carouselvisible: false
        };
    }
    handleCarouselShow = e => {
        let selectedIndex = e.target.dataset.index;
        this.setState({
            carouselvisible: true,
            selectedIndex
        });
    };
    handleCarouselHide = e => {
        this.setState({
            carouselvisible: false
        });
    };
    handleFileChange = e => {
        let { onFileChange } = this.props;
        onFileChange && onFileChange(e);
        this.inputfile.value = "";
    };
    render() {
        let { title, tip, attachments, value, onChange, size } = this.props;
        let { selectedIndex, carouselvisible } = this.state;
        return (
            <div className={styles.attachments}>
                <div className={styles.title}>
                    {title}
                    {tip && <span className={styles.tip}>{tip}</span>}
                </div>
                <div className={"iconfont icon-tupian " + styles.uploadbtn}>
                    <input
                        ref={ele => (this.inputfile = ele)}
                        className={styles.filebtn}
                        type="file"
                        accept="image/gif,image/jpeg,image/jpg,image/png"
                        multiple
                        onChange={this.handleFileChange}
                    />
                </div>
                {attachments.length > 0 && (
                    <div className={styles.lists}>
                        {attachments.map((attachment, index) => {
                            return (
                                <div
                                    className={styles.list}
                                    key={index}
                                    data-index={index}
                                    onClick={this.handleCarouselShow}
                                    style={{ backgroundImage: "url(" + attachment.bloburl + ")" }}
                                >
                                    <span
                                        onClick={this.props.onDel}
                                        data-index={index}
                                        className={"iconfont icon-chuyidong " + styles.del}
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
                {carouselvisible && (
                    <div className={styles.carousel} onClick={this.handleCarouselHide}>
                        <Carousel autoplay={false} selectedIndex={selectedIndex}>
                            {attachments.map((attachment, index) => (
                                <img className={styles.carouselImg} src={attachment.bloburl} />
                            ))}
                        </Carousel>
                        <div className={"iconfont icon-chuyidong " + styles.close} />
                    </div>
                )}
            </div>
        );
    }
}
