/**
 * 资源管理
 */

import React, { Component } from 'react'
import { Button, message, Menu, Icon, Pagination } from 'antd';
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
const Item = Menu.Item

import styles from './SourceManager.scss'
import SourceLists from './SourceLists'

class SourceManager extends Component {
    render() {
        let { style, onBack, onSelect } = this.props
        return (
            <div className={styles.SourceManager} style={style}>
                <div className={styles.title}>
                    <div>服务器资源管理器</div>
                    <Button onClick={onBack} className={styles.back} type="primary">返回</Button>
                </div>
                <div className={styles.menu}>
                    <Menu theme="dark" defaultSelectedKeys={['_img']} onSelect={this.handleSelect}>
                        <Item key={'_img'}>图片</Item>
                        <Item key={'_video'}>视频</Item>
                    </Menu>
                </div>
                <SourceLists onSelect={onSelect} />
            </div>
        )
    }
}

export default SourceManager