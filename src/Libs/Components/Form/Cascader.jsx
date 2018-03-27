import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Cascader } from 'antd';
const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];
class myCascader extends Component {
    onChange = (value) => {
        console.log(value);
    }
    render() {
        let { menus } = this.props
        console.log(menus.get('/content_main/').toJS());

        return (
            <div>
                <Cascader defaultValue={[ 'xihu']} options={options} onChange={this.onChange} />
            </div>
        )
    }
}

export default connect((state) => ({
    menus: state.getIn(['initApp', 'menus']),
})
)(myCascader)