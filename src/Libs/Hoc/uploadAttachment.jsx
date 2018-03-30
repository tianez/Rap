/**
 * 高阶函数
 * 上传文件附件
 */
import React, { Component } from "react";
import { Toast } from "antd-mobile";

const uploadAttachment = Component =>
    class extends React.Component {
        static defaultProps = {
            value: "[]",
            image: true,
            maxsize: AppConfig.maxUploadSize || 1024 * 300, //设置小于300kb的图片不压缩
            width: AppConfig.imgUploadWidth || 1000, //设置图片压缩宽度
            height: AppConfig.imgUploadHeight || 1000, //设置图片压缩高度
            cover: AppConfig.imgCover || false //图片是否裁剪
        };
        constructor(props) {
            super(props);
            let params = {
                cover: props.cover,
                width: props.width,
                height: props.height
            };
            this.state = {
                attachments: [].concat(JSON.parse(props.value)),
                files: {},
                value: [],
                params: {
                    ...params,
                    ...props.params
                }
            };
        }
        /**
         * 选择框选取文件
         */
        handleFileChange = e => {
            let { image } = this.props;
            let files = e.target.files || e.dataTransfer.files;
            for (let index = 0; index < files.length; index++) {
                if (image && files[index].type !== "image/gif") {
                    this.handleImageUpload(files[index]);
                } else {
                    this.handleFileUpload(files[index]);
                }
            }
        };

        /**
         * 文件上传操作
         */
        handleFileUpload = async file => {
            let { attachments, files } = this.state;
            let _id = attachments.length;
            files[_id] = file;
            let bloburl = URL.createObjectURL(file);
            attachments.push({
                name: file.name,
                size: file.size,
                type: file.type,
                state: 1, //1：上传中，2：上传失败，3：上传成功，
                bloburl: bloburl
            });
            this.setState({ attachments, files });
            let formdata = new FormData();
            formdata.append("file", file);
            let res = await Request("businessResources/oneUpload", {
                method: "post",
                data: formdata
            });
            if (res.success && res.success != "false") {
                attachments[_id].state = 3;
                attachments[_id].path = res.url;
            } else {
                attachments[_id].state = 2;
                Toast.info(res.message);
            }
            this.setState({ attachments });
            this.handleChange({ attachments });
        };

        /**
         * 图片上传操作
         */
        handleImageUpload = async file => {
            let { maxsize } = this.props;
            if (file.size < maxsize) {
                return this.handleFileUpload(file);
            }
            let { attachments, files } = this.state;
            let _id = attachments.length;
            files[_id] = file;
            let bloburl = URL.createObjectURL(file);
            attachments.push({
                name: file.name,
                size: file.size,
                type: file.type,
                state: 1, //1：上传中，2：上传失败，3：上传成功，
                bloburl: bloburl
            });
            this.setState({ attachments, files });
            let image = new Image();
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async () => {
                // 通过 reader.result 来访问生成的 DataURL
                let url = reader.result;
                image.src = url;
                image.onload = async () => {
                    let canvas = this.convertImageToCanvas(image);
                    let DataURL = canvas.toDataURL();
                    let upfile = this.convertCanvasToBlob(DataURL, file.type);
                    let formdata = new FormData();
                    formdata.append("file", upfile);
                    let res = await Request("businessResources/base64ImageUploadByBinary", {
                        method: "post",
                        data: formdata
                    });
                    if (res.success) {
                        attachments[_id].state = 3;
                        attachments[_id].path = res.data.map.url;
                    } else {
                        attachments[_id].state = 2;
                        Toast.info(res.message);
                    }
                    this.setState({ attachments });
                    this.handleChange({ attachments });
                };
            };
        };
        /**
         * 将图片转化为canvas 并进行压缩处理
         */
        convertImageToCanvas = (image, params = this.state.params) => {
            let cover = params.cover || false;
            let w = params.width || 600;
            let h = params.height || 600;
            let iw = image.width;
            let ih = image.height;
            let b = w / h;
            let ib = iw / ih;
            let sx = 0;
            let sy = 0;
            let niw;
            let nih;
            let canvas = document.createElement("canvas");
            if (cover) {
                if (b > ib) {
                    niw = w;
                    nih = w * ih / iw;
                } else {
                    niw = iw * h / ih;
                    nih = h;
                }
                canvas.width = w;
                canvas.height = h;
                sx = (w - niw) / 2;
                sy = (h - nih) / 2;
            } else {
                if (b > ib) {
                    nih = h;
                    niw = nih * ib;
                } else {
                    niw = w;
                    nih = niw * ih / iw;
                }
                canvas.width = niw;
                canvas.height = nih;
            }
            canvas.getContext("2d").drawImage(image, 0, 0, image.width, image.height, sx, sy, niw, nih);
            return canvas;
        };
        /**
         * 将data base64字符串数据转化为blob文件数据
         */
        convertCanvasToBlob = (DataURL, type = "image/png") => {
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
                type: type
            });
            return blob;
        };
        /**
         * 删除操作
         */
        handleDel = e => {
            e.stopPropagation();
            let index = e.target.dataset.index;
            let { attachments, files } = this.state;
            attachments.splice(index, 1);
            delete files[index];
            this.setState({ attachments, files });
            this.handleChange({ attachments });
        };
        handleChange = ({ attachments = this.state.attachments }) => {
            let { onChange, field, name, isone } = this.props;
            let value = [];
            attachments.map(attachment => {
                if (attachment.state == 3 || !attachment.state) {
                    value.push({
                        size: attachment.size,
                        name: attachment.name,
                        type: attachment.type,
                        path: attachment.path
                    });
                }
            });
            if (isone) {
                this.setState({ attachments: [] });
            } else {
                this.setState({ value });
            }
            onChange && onChange((field && (field.name || field.id)) || name, JSON.stringify(value));
        };
        size = size => {
            let tip =
                size < 1024
                    ? size + "B"
                    : size < 1024 * 1024
                        ? (size / 1024).toFixed(2) + "KB"
                        : size < 1024 * 1024 * 1024
                            ? (size / 1024 / 1024).toFixed(2) + "MB"
                            : size < 1024 * 1024 * 1024 * 1024
                                ? (size / 1024 / 1024 / 1024).toFixed(2) + "GB"
                                : size + "B";
            return tip;
        };
        render() {
            let { attachments, value } = this.state;
            return (
                <Component
                    {...this.props}
                    onFileChange={this.handleFileChange}
                    onDel={this.handleDel}
                    size={this.size}
                    attachments={attachments}
                    value={value}
                />
            );
        }
    };

export default uploadAttachment;
