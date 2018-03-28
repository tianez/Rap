import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'antd-mobile';

import styles from './Banner.scss';

export default class Banner extends Component {
    state = {
        data: ['http://imgfile.estv.com.cn/ysjj/public/images/banner/1.jpg',
            'http://imgfile.estv.com.cn/ysjj/public/images/banner/2.jpg',
            'http://imgfile.estv.com.cn/ysjj/public/images/banner/3.jpg'],
    }
    render() {
        return (
            <Carousel
                autoplay={false}
                infinite
                selectedIndex={1}
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                dotStyle={{ position: 'relative', bottom: '.06rem' }}
                dotActiveStyle={{ position: 'relative', bottom: '.06rem', background: '#fff' }}
            >
                {this.state.data.map(ii => (
                    <Link key={ii} to="/" className={styles.item} style={{ backgroundImage: 'url(' + ii + ')' }} ></Link>
                ))}
            </Carousel>
        )
    }
}
