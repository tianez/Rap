import React, { Component } from 'react'

import { NavBar, Icon } from 'antd-mobile';

const Header = ({ children, multiple, onLeftClick, onRightClick }) => {
    return (
        <NavBar mode="light" icon={<Icon type="left" size='lg' />}
            onLeftClick={onLeftClick}
            rightContent={
                multiple && <div onClick={onRightClick}>完成</div>
            }
        >
            {children || '选择部门'}
        </NavBar>
    )
}

export default Header