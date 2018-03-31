/**
 * 审批首页
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavBar, List, Icon, Button } from 'antd-mobile';
const Item = List.Item;

import Layout from 'Components/Layout/Layout'
import Content from 'Components/Layout/Content'

export default class AddressBookDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    setting = () => {
        YSSJ.setting()
    }
    render() {
        let { match } = this.props
        return (
            <Layout>
                <NavBar mode="light"
                    icon={<Icon type="left" size='lg' />}
                    onLeftClick={() => window.history.back()}>审批</NavBar>
                <Content>
                    <Button onClick={this.setting}>设置</Button>
                    <div>
                    <Link to={'/approved'}>审批列表</Link>
                    </div>
                   <div>
                   <Link to={match.url + '/chuchai'}>出差</Link>
                   </div>
                </Content>
            </Layout>
        )
    }
}
