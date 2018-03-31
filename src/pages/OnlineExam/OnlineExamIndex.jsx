import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar, Icon, Tabs } from 'antd-mobile';

import Layout from 'Components/Layout/Layout'
import Content from 'Components/Layout/Content'
import LeftIcon from 'Components/Layout/LeftIcon'

import PaperList from './OnlineExamIndex/PaperList';
import RecordList from './OnlineExamIndex/RecordList';

@connect(state => ({
    initialPage: state.getIn(['init', 'initialPageExam'])
}))
export default class OnlineExamIndex extends Component {
    static defaultProps = {
        initialPage: 0,
    }
    handleChange = (tab, index) => {
        this.props.dispatch('init/save', { initialPageExam: index })
    }
    render() {
        const tabs = [
            { title: '试卷库', sub: '0' },
            { title: '考试记录', sub: '1' },
        ];
        let { initialPage, history } = this.props
        return (
            <Layout>
                <NavBar mode="light" icon={<LeftIcon />}>在线考试</NavBar>
                <Content>
                    <Tabs tabs={tabs} initialPage={initialPage} onChange={this.handleChange}>
                        <PaperList index={0} cur={initialPage} history={history} />
                        <RecordList index={1} cur={initialPage} history={history} />
                    </Tabs>
                </Content>
            </Layout>
        )
    }
}