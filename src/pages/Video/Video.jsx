import React, { Component } from "react";
import { List, NavBar, WhiteSpace } from "antd-mobile";
const Item = List.Item;
import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";
import LeftIcon from "Components/Layout/LeftIcon";

import styles from "./Video.scss";
export default class Video extends Component {
    state = {
        fullscreen: false,
        videoHeight: 0
    };
    componentDidMount() {
        this.initVideo();
    }
    initVideo = () => {
        // window.onresize = () => {
        //     // alert(window.innerHeight);
        //     this.videoPlayer.style.height = window.innerHeight + "px";
        //     // this.videoPlayer.style.height = "680px";
        // };
        // this.videoPlayer.addEventListener("play", this.handleFullScreen(true), false);
        this.videoPlayer.addEventListener("loadedmetadata", () => {
            let { width } = window.screen;
            let { videoWidth, videoHeight } = this.videoPlayer;
            let vHeight = (width * videoHeight) / videoWidth;
            console.log(vHeight);
            console.log(window.screen);
            console.log(videoWidth);
            console.log(videoHeight);

            this.setState({
                videoWidth: width,
                videoHeight: vHeight
            });
        });
        if (!userAgents.isweixin) {
            return;
        }
        this.videoPlayer.addEventListener(
            "play",
            () => {
                this.videoPlayer.style.height = window.screen.height + "px";
                this.handleFullScreen(true);
            },
            false
        );
        this.videoPlayer.addEventListener(
            "pause",
            () => {
                this.videoPlayer.style.height = "auto";
                this.handleFullScreen(false);
            },
            false
        );
    };
    handleFullScreen = fullscreen => {
        this.setState({
            fullscreen
        });
    };
    render() {
        let { fullscreen, videoHeight } = this.state;
        let navBarCls = "";
        let videoCls = styles.video;
        let contentStyle = {};
        if (fullscreen) {
            navBarCls = styles.navBar;
            videoCls = styles.fullscreenvideo;
            contentStyle = {
                position: "absolute",
                top: videoHeight + "px"
            };
        }
        return (
            <LayoutView>
                <NavBar className={navBarCls} mode="light" icon={<LeftIcon />}>
                    视频播放
                </NavBar>
                <video
                    controls
                    ref={e => (this.videoPlayer = e)}
                    style={{ height: videoHeight + "px" }}
                    className={videoCls}
                    playsInline="true"
                    airplay="allow"
                    x5-video-player-type="h5"
                    x5-video-player-fullscreen="true"
                    x5-video-orientation="portrait"
                    preload="auto"
                    // autoPlay
                    src={"public/video/2.mp4"}
                />
                <div className={styles.tm}>111111111111111</div>
                <ContentView className={styles.content} style={contentStyle}>
                    <div>
                        <div style={{ height: "500px" }}>22222222222</div>
                        111111111111111111111111111111111
                    </div>
                </ContentView>
            </LayoutView>
        );
    }
}
