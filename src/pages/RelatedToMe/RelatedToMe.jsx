import React, { Component } from 'react'

import { connect } from 'react-redux'
import { NavBar, Icon, List, WhiteSpace, Tabs } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

import Layout from 'Components/Layout/Layout'
import Content from 'Components/Layout/Content'
import Time from 'Extended/Time/Time'

import styles from './RelatedToMe.scss';

export default class RelatedToMe extends Component {
    render() {
        let { tabs, lists, title, onClick, initialPage = 0 } = this.props
        return (
            <Layout>
                <NavBar mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => window.history.back()}>{title}</NavBar>
                <Content className={styles.content}>
                    <Tabs tabs={tabs} initialPage={initialPage}>
                        {lists && lists.map((list, index) => {
                            return <ListItems key={index} list={list} onClick={onClick} />
                        })}
                    </Tabs>
                </Content>
            </Layout>
        )
    }
}

const ListItems = ({ list, onClick }) => {
    return (
        <List>
            {list.length > 0 ?
                list.map(data => {
                    let username = data.ccUserName || data.userName
                    return (
                        <Item
                            key={data.businessId}
                            arrow="horizontal"
                            className={styles.Item}
                            thumb={<div className={styles.thumb}>{username.slice(0, 1)}</div>}
                            multipleLine
                            onClick={onClick.bind(null, data)}
                            platform="android"
                        >
                            <div>{data.ccTitle}</div>
                            <Brief>
                                <div>申请时间：<Time time={data.createTime} /></div>
                                <div>抄送时间：<Time time={data.ccTime} /></div>
                                {data.readState == 'N' ?
                                    <div className={styles.status}>未读</div> :
                                    <div className={styles.statusAgree}>已读</div>
                                }
                            </Brief>
                        </Item>
                    )
                }) :
                <Item>
                    <div className={styles.noItem}>暂无数据</div>
                </Item>
            }
        </List>
    )
}
