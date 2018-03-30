import React, { Component } from 'react'
import { Icon, List, WhiteSpace } from 'antd-mobile';
const Item = List.Item;

import styles from './SelectedItems.scss';

const SelectedItems = ({ selecteditems, multiple, onClick }) => {
    return (
        multiple ?
            [<List key={'list'}>
                <Item>
                    {selecteditems.map(d => {
                        return <span key={d.get('id')} className={styles.checkedmenu} onClick={onClick.bind(null, d)} >{d.get('name')}</span>
                    })}
                </Item>
            </List>,
            <WhiteSpace  key={'whitespace'}/>] :
            null
    )
}

export default SelectedItems