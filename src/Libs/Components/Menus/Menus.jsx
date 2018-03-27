import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
const { ItemGroup, SubMenu, Item } = Menu

import styles from './Menus.scss'

/**
 * key，icon，title，children
 */

const Menus = ({ siderFold, treeData, ...props }) => {
    let menuItems = treeData ? getItems(treeData) : ''
    return (
        <Menu defaultSelectedKeys={[]} {...props} >
            {menuItems}
        </Menu>
    )
}

export default Menus

const getItems = (menus) => {
    return (
        menus.map((item) => {
            if (item.children && item.children.length > 0) {
                return getItemChildren(item)
            } else if (item.itemGroup) {
                return getItemGroup(item)
            } else {
                return getItem(item)
            }
        })
    )
}

const getItemChildren = (item) => {
    return (
        <SubMenu key={item.key} title={<span>{item.icon && <Icon type={item.icon} />}<span>{item.title}</span></span>}>
            {getItems(item.children)}
        </SubMenu>
    )
}

const getItemGroup = (item, currentModule) => {
    return (
        <SubMenu key={item.key} title={<span>{item.icon && <Icon type={item.icon} />}<span>{item.title}</span></span>}>
            {item.itemGroup.map((it, i) => {
                return (
                    <MenuItemGroup key={i} title={it.title}>
                        {getItems(it.children)}
                    </MenuItemGroup>
                )
            })}
        </SubMenu>
    )
}

const getItem = (item) => {
    return (
        <Item key={item.key}>
            {item.icon && <Icon type={item.icon} />}
            <span>{item.title}</span>
        </Item>
    )
}