import React, { Component } from 'react'

import errorsrc from './error.png'

export default class Img extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }
    componentWillMount() {
        let { src } = this.props
        this.handleLoadImg(src)
    }
    componentWillReceiveProps(nextProps) {
        let { src } = nextProps
        this.handleLoadImg(src)
    }
    handleLoadImg = (src) => {
        let img = new Image()
        img.src = src;
        if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数     
            this.setState({
                loaded: true,
                loaderror: false,
            })
            return; // 直接返回，不用再处理onload事件     
        }
        img.onerror = () => {
            this.setState({
                loaded: true,
                loaderror: true,
            })
        };
        img.onload = () => {
            this.setState({
                loaded: true,
                loaderror: false,
            })
        };
    }
    render() {
        let { loaded, loaderror } = this.state
        let { src, ...props } = this.props
        src = loaderror ? errorsrc : src
        return (
            loaded ?
                <img {...props} src={src} /> :
                null
        )
    }
}
