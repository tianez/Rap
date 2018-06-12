import React, { Component } from "react";

class LazyWarper extends Component {
    static defaultProps = {
        delaytime: 20,
        scrollTop: 0,
        scrollTopChange: false
    };
    constructor(props) {
        super(props);
        this.startTime = null;
        this.moveXY = 0;
    }
    /**
     * 组件渲染完毕添加监听事件
     */
    componentDidMount() {
        let { scrollTop } = this.props;
        if (scrollTop) {
            this.lazyWarper.scrollTop = scrollTop;
        }
    }
    componentDidUpdate() {
        this.handleScrollChange();
    }
    handleScrollChange = () => {
        let { scrollTop, scrollTopChange, scrollTopChangeBack } = this.props;
        if (scrollTopChange) {
            this.lazyWarper.scrollTop = scrollTop;
            scrollTopChangeBack();
        }
    };
    /**
     * 监听事件，返回组件滚动信息到父级组件
     */
    handleScroll = () => {
        let endTime = new Date();
        if (this.startTime && endTime - this.startTime < this.props.delaytime) {
            return;
        }
        this.startTime = endTime;
        let viewport = {
            scrollTop: this.lazyWarper.scrollTop,
            warperHeight: this.lazyWarper.getBoundingClientRect().height
        };
        this.props.onScroll && this.props.onScroll(viewport);
    };
    /**
     * 监听组件触屏滑动事件
     * 在向左右滑动时，阻止组件的滚动事件
     */
    handleTouchStart = e => {
        let point = e.touches[0] || e;
        this._startX = point.pageX;
        this._startY = point.pageY;
    };
    handleTouchMove = e => {
        let point = e.touches[0] || e;
        let moveX = point.pageX - this._startX;
        let moveY = point.pageY - this._startY;
        if (this.moveXY == 0) {
            if (Math.abs(moveX) > Math.abs(moveY)) {
                this.moveXY = 1;
            } else {
                this.moveXY = 2;
            }
        }
        if (this.moveXY == 1) {
            this.lazyWarper.style.overflowY = "hidden";
        } else {
            e.stopPropagation();
        }
    };
    handleTouchEnd = e => {
        this.lazyWarper.style.overflowY = "auto";
        this.moveXY = 0;
    };
    /**
     * 渲染组件
     */
    render() {
        let style = { position: "relative", height: "100%", width: "100%", overflowX: "hidden", ...this.props.style };
        return (
            <div
                ref={ele => (this.lazyWarper = ele)}
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
                onScroll={this.handleScroll}
                style={style}
                className={this.props.className}
            >
                {this.props.children}
            </div>
        );
    }
}

export default LazyWarper;
