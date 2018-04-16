import React, { Component } from "react";
import QRCode from "qrcode";
import styles from "./Qrcode.scss";
export default class componentName extends Component {
    static defaultProps = {
        opts: {
            errorCorrectionLevel: "H",
            type: "image/jpeg",
            rendererOpts: {
                quality: 1
            }
        }
    };
    componentDidMount() {
        let { text, opts } = this.props;
        QRCode.toDataURL(text, opts, (err, url) => {
            if (err) throw err;
            this.qrcode.src = url;
        });
    }
    refCb = ele => {
        this.qrcode = ele;
    };
    render() {
        return <img ref={this.refCb} className={styles.content} {...this.props} />;
    }
}
