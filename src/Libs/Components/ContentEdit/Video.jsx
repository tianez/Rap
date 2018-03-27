import React, { Component } from "react";
import ReactDOM from "react-dom";

import asyncComponent from "Extended/asyncComponent";
const SourceManager = asyncComponent(() => import("Components/SourceManager/SourceManager"));

import styles from "./Video.scss";

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showServer: false,
            obj_url: null
        };
    }
    /**
     * 打开服务器资源列表
     */
    handleShowSource = () => {
        this.setState({
            showServer: true
        });
    };
    /**
     * 隐藏列表
     */
    handleHideSource = () => {
        this.setState({
            showServer: false
        });
    };

    handleClick = e => {
        let obj_url = e.target.getAttribute("obj_url");
        this.setState({
            showServer: false
        });
        let { name, value, onChange } = this.props;
        if (obj_url == value) {
            return;
        }
        onChange && onChange(name, val);
    };
    render() {
        let { showServer } = this.state;
        let { value } = this.props;
        return (
            <div className={styles.video}>
                <div className={styles.videosrc}>
                    <video src={value} />
                </div>
                <div className={styles.rechoose} onClick={this.handleShowSource}>
                    {value ? "重新选择" : "选择视频"}
                </div>
                {showServer
                    ? ReactDOM.createPortal(
                          <SourceManager onBack={this.handleHideSource} onSelect={this.handleClick} />,
                          document.getElementById("root")
                      )
                    : null}
            </div>
        );
    }
}

export default Video;
