import React, { Component, PropTypes } from "react";
import Cropper from "cropperjs";
import { Button, message } from "antd";

import asyncComponent from "Extended/asyncComponent";
const SourceManager = asyncComponent(() => import("Components/SourceManager/SourceManager"));

import styles from "./CropperImage.scss";

class UploadImg extends Component {
    static defaultProps = {
        imgsrc: "",
        className: ""
    };
    constructor(props) {
        super(props);
        let { imgsrc } = props;
        this.state = {
            imgsrc: imgsrc,
            bloburl: imgsrc,
            imginfo: {},
            newfile: {},
            step: 0, //0 ,1:选择了图片，2：裁剪了，3：上传中,4:上传成功
            server: 0,
            serverurl: null,
            showServer: false
        };
    }
    componentDidMount() {
        this.handleBuildCropper();
    }
    handleBuildCropper = () => {
        let image = this.img;
        this.cropper = new Cropper(image, {
            aspectRatio: 16 / 9,
            minCropBoxWidth: 200,
            viewMode: 1,
            autoCropArea: 1,
            dragMode: "move",
            // zoomable: false,
            // scalable: false,
            toggleDragModeOnDblclick: false,
            // autoCrop: false,
            // background: false,
            // checkCrossOrigin: false,
            cropend: e => {
                let { width, height } = this.cropper.getCroppedCanvas();
                this.setState({
                    newfile: {
                        width,
                        height
                    }
                });
            },
            ready: () => {
                this.handleImgData();
            },
            zoom: () => {
                this.handleImgData();
            }
        });
    };
    handleSetAspectRatio = () => {
        this.cropper.setAspectRatio(4 / 3);
        this.handleImgData();
    };
    handleSetAspectRatio169 = () => {
        this.cropper.setAspectRatio(16 / 9);
        this.handleImgData();
    };
    /**
     * 打开服务器图片列表
     */
    handleShowServer = () => {
        this.setState({
            showServer: true
        });
    };
    /**
     * 隐藏图片列表
     */
    handleHideImgList = () => {
        this.setState({
            showServer: false
        });
    };
    /**
     * 选择已上传图片编辑
     */
    handleChangeImg = e => {
        let imgsrc = e.target.getAttribute("src");
        this.setState({
            bloburl: imgsrc,
            step: 1,
            serverurl: imgsrc,
            server: 1,
            showServer: false
        });
        this.cropper.replace(imgsrc);
    };
    /**
     * 选择框选取图片
     */
    handleFileChange = e => {
        let file = e.target.files[0];
        let bloburl = URL.createObjectURL(file);
        this.setState({
            bloburl,
            step: 1,
            serverurl: bloburl,
            server: 0
        });
        this.cropper.replace(bloburl);
        // this.handleFileUpload(file, 1)
    };
    /**
     * 获取裁剪框图片信息
     */
    handleImgData = () => {
        let { width, height } = this.cropper.getCroppedCanvas();
        this.setState({
            imginfo: {
                ...this.cropper.getImageData()
            },
            newfile: {
                width,
                height
            }
        });
    };
    /**
     * 对已编辑图片重新进行编辑
     */
    handleReBuild = () => {
        let { bloburl } = this.state;
        this.setState({
            step: 1
        });
        this.cropper.replace(bloburl);
    };
    /**
     * 确认裁剪
     */
    handleOverCropper = () => {
        let canvas = this.cropper.getCroppedCanvas({ width: 800 });
        let DataURL = canvas.toDataURL();
        let file = this.convertCanvasToFile(DataURL);
        this.cropper.destroy();
        this.setState({
            imgsrc: DataURL,
            cropperSrc: DataURL,
            file: file,
            step: 2,
            server: 0
        });
    };
    /**
     * 将data base64字符串数据转化为blob文件数据
     */
    convertCanvasToFile = DataURL => {
        // let data = canvas.toDataURL();
        // dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
        let data = DataURL.split(",")[1];
        data = window.atob(data);
        let ia = new Uint8Array(data.length);
        for (let i = 0; i < data.length; i++) {
            ia[i] = data.charCodeAt(i);
        }
        // canvas.toDataURL 返回的默认格式就是 image/png
        let blob = new Blob([ia], {
            type: "image/png"
        });
        return blob;
    };

    /**
     * 点击上传按钮
     */
    handleUpload = async () => {
        let { file } = this.state;
        this.setState({
            step: 3
        });
        this.handleFileUpload(file, 4);
    };
    /**
     * 图片裁剪上传操作
     */
    handleFileUpload = async (file, step) => {
        this.setState({
            server: 0
        });
        let formdata = new FormData();
        formdata.append("uploadFile", file);
        // let res = await Request('imageUpload.jspx', {
        let res = await Request("base64ImageUpload.jspx", {
            method: "post",
            data: formdata
        });
        if (res.success) {
            message.success("上传成功");
            this.setState({
                serverurl: res.data.uploadPath,
                step: step
            });
        } else {
            message.error("上传失败，" + res.msg);
            this.setState({
                step: 2
            });
        }
    };
    /**
     * 确定插入
     */
    handleChange = () => {
        let { onChange } = this.props;
        let { serverurl, cropperSrc } = this.state;
        onChange && onChange(serverurl, cropperSrc);
    };

    // getBase64Image = (img) => {
    //     var canvas = document.createElement("canvas");
    //     canvas.width = img.width;
    //     canvas.height = img.height;
    //     var ctx = canvas.getContext("2d");
    //     ctx.drawImage(img, 0, 0, img.width, img.height);
    //     console.log(canvas);
    //     var dataURL = canvas.toDataURL("image/png");
    //     return dataURL
    //     // return dataURL.replace("data:image/png;base64,", "");
    // }

    // cha = () => {
    //     var img = new Image(); //创建一个Image对象，实现图片的预下载
    //     // img.src = '../public/images/1.jpg';
    //     img.src = 'http://oz6i4dok7.bkt.clouddn.com/images/avatar/1.jpg';
    //     // if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
    //     //     // callback(img);
    //     //     return; // 直接返回，不用再处理onload事件
    //     // }
    //     img.crossOrigin = 'anonymous'
    //     img.onload = () => { //图片下载完毕时异步调用callback函数。
    //         console.log(img.width);
    //         let bloburl = this.getBase64Image(img);
    //         this.cropper.replace(bloburl)
    //     };
    // }

    render() {
        let { imginfo, newfile, imgsrc, bloburl, step, server, showServer } = this.state;
        let { className } = this.props;
        return (
            <div className={styles.uploadwarper + " " + className}>
                <div className={styles.title}>
                    <div>编辑图片</div>
                    <Button className={styles.back} onClick={this.props.onHide} type="primary">
                        返回
                    </Button>
                </div>
                <div className={styles.cropperEdit}>
                    <div className={styles.info}>
                        <div>
                            <div>原图大小：</div>
                            <div>宽：{imginfo.naturalWidth}</div>
                            <div>高：{imginfo.naturalHeight}</div>
                        </div>
                        <div>
                            <div>裁剪后图片大小：</div>
                            <div>宽：{newfile.width}</div>
                            <div>高：{newfile.height}</div>
                            <div>
                                （为方便操作，裁剪界面的图片有缩放；裁剪后图片宽度超过800像素的，会自动等比例压缩到800像素宽度）
                            </div>
                        </div>
                    </div>
                    <div className={styles.CropperDiv}>
                        <img className={styles.imageprew} src={imgsrc} />
                        <img id="image" className={styles.image} ref={ele => (this.img = ele)} src={imgsrc} />
                    </div>
                    <div className={styles.crooperaction}>
                        <div className={"iconfont icon-tianjiatupian " + styles.uploadfile}>
                            <input type="file" onChange={this.handleFileChange} className={styles.uploadinput} />
                        </div>
                        <div className={styles.actiondiv}>
                            <Button onClick={this.handleShowServer} style={{ width: "190px" }} type="primary">
                                从服务器选取
                            </Button>
                        </div>
                        <div className={styles.actiondiv}>
                            <Button onClick={this.handleSetAspectRatio} type="primary" disabled={step != 1}>
                                比例4/3
                            </Button>
                            <Button onClick={this.handleSetAspectRatio169} type="primary" disabled={step != 1}>
                                比例16/9
                            </Button>
                        </div>
                        <div className={styles.actiondiv}>
                            <Button onClick={this.handleOverCropper} type="primary" disabled={step != 1}>
                                确定裁剪
                            </Button>
                            <Button onClick={this.handleReBuild} type="primary" disabled={step != 2 && step != 4}>
                                重新裁剪
                            </Button>
                        </div>
                        <div className={styles.actiondiv}>
                            <Button onClick={this.handleUpload} type="primary" loading={step == 3} disabled={step != 2}>
                                上传
                            </Button>
                        </div>
                        <Button onClick={this.handleChange} type="primary" disabled={server != 1}>
                            插入原图
                        </Button>
                        <Button onClick={this.handleChange} type="primary" disabled={step != 4}>
                            插入
                        </Button>
                        {/* <a href={imgsrc} download="w3logo">下载</a> */}
                    </div>
                </div>
                {showServer && <SourceManager onBack={this.handleHideImgList} onSelect={this.handleChangeImg} />}
            </div>
        );
    }
}

export default UploadImg;
