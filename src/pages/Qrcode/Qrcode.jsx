import React, { Component } from "react";
import { NavBar } from "antd-mobile";

import LayoutView from "Views/Layout/LayoutView";
import ContentView from "Views/Layout/ContentView";
import LeftIcon from "Components/Layout/LeftIcon";

import asyncComponent from "Extended/asyncComponent";
const Qrcode = asyncComponent(() => import("Components/Qrcode/Qrcode"));

import styles from "./Qrcode.scss";
export default class componentName extends Component {
    static defaultProps = {
        text: "tianez.github.io/Rap/",
        opts: {
            errorCorrectionLevel: "H",
            type: "image/jpeg",
            rendererOpts: {
                quality: 1
            }
        }
    };
    render() {
        return (
            <LayoutView>
                <NavBar mode="light" icon={<LeftIcon />}>
                    下载
                </NavBar>
                <ContentView className={styles.content}>
                    <Qrcode text="https://tianez.github.io/Rap/" />
                </ContentView>
            </LayoutView>
        );
    }
}
