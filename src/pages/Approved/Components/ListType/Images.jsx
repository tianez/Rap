import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';

import styles from './Images.scss'

export default class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            carouselvisible: false,
        }
    }
    handleCarouselShow = (e) => {
        let selectedIndex = e.target.dataset.index
        this.setState({
            carouselvisible: true,
            selectedIndex,
        })
    }
    handleCarouselHide = (e) => {
        this.setState({
            carouselvisible: false,
        })
    }
    render() {
        let { filedTitle, filedValue } = this.props
        if (!filedValue) {
            return null
        }
        let { selectedIndex, carouselvisible } = this.state
        let attachments = JSON.parse(filedValue)
        return (
            <div className={styles.attachments}>
                <div className={styles.title}>图片{filedTitle.title}</div>
                {attachments.length > 0 && <div className={styles.lists}>
                    {attachments.map((attachment, index) => {
                        return (
                            <div className={styles.list}
                                key={index}
                                onClick={this.handleCarouselShow}
                                style={{ backgroundImage: 'url(' + attachment.path + ')' }}></div>
                        )
                    })}
                </div>}
                {carouselvisible && <div className={styles.carousel} onClick={this.handleCarouselHide}>
                    <Carousel
                        autoplay={false}
                        selectedIndex={selectedIndex} >
                        {attachments.map((attachment, index) => (
                            <img key={index} className={styles.carouselImg} src={attachment.path} />
                        ))}
                    </Carousel>
                    <div className={'iconfont icon-chuyidong ' + styles.close}></div>
                </div>
                }
            </div>
        )
    }
}