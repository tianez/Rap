/**
 * 远程图片列表
 */

import React from 'react'
import { Pagination } from 'antd';
import styles from './Images.scss'

import RequestResources from './RequestResources'

const Images = ({ list, pages, onChange, onClick }) => (
    <div className={styles.files}>
        <div className={styles.title}>服务器上</div>
        <div className={styles.images}>
            {list.map((img, index) => {
                return <img key={img.imgPath} src={img.imgPath} onClick={onClick} className={styles.file} />
            })}
            <div className="clear"></div>
            <Pagination {...pages} onChange={onChange} className={styles.pagination} />
        </div>
    </div>
)

export default RequestResources(Images)