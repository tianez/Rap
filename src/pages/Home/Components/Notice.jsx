import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Carousel, Toast } from 'antd-mobile';

import styles from './Notice.scss';

export default class Notice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    async componentWillMount() {
        let res = await Request('bulletinInformation/getBulletinList', {
            params: {
                userId: localStorage.userId,
                pageNo: 1,
                pageSize: 3,
            }
        })
        if (res.success) {
            this.setState({
                list: res.data.page.list
            })
        } else {
            Toast.info(res.message)
        }
    }

    render() {
        let { list } = this.state
        return (
            <div className={styles.Notice}>
                <div className={"iconfont icon-tongzhigonggao " + styles.icon}></div>
                {list.length > 0 ? <Carousel className={styles.Carousel}
                    vertical
                    dots={false}
                    dragging={false}
                    swiping={false}
                    autoplay
                    infinite>
                    {list.map(d => {
                        return <Link key={d.id} to={'/notice/nd/' + d.id} className={styles.item}>{d.title}</Link>
                    })}
                </Carousel> :
                    <div className={styles.Carousel}>暂无公告</div>
                }
                <Link to="/Notice" className={styles.more}>更多</Link>
            </div>
        )
    }
}
