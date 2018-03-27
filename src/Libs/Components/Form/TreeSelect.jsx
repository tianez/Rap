import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, TreeSelect } from 'antd';
const { Item } = Form;

class myTreeSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: [76],
        }
    }
    componentWillMount() {
        let { menus = {} } = this.props
        menus = menus.get('/content_main/').toJS()
        let treeData = getTreeData(menus)
        this.setState({ treeData })
    }
    onChange = (value) => {
        console.log(arguments);
        console.log(value);
        this.setState({ value });
    }
    render() {
        let { title } = this.props
        let { treeData, value } = this.state
        return (
            <Item label={title} >
                <TreeSelect
                    style={{ width: 300 }}
                    value={value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    treeData={treeData}
                    placeholder="Please select"
                    treeDefaultExpandAll
                    allowClear
                    // multiple
                    onChange={this.onChange}
                />
            </Item>
        );
    }
}

export default connect((state) => ({
    menus: state.getIn(['initApp', 'menus']),
})
)(myTreeSelect)

function getTreeData(data) {
    let treeData = data.map((m) => {
        let nr = {
            label: m.title,
            value: m.key,
            key: m.key,
        }
        if (m.children.length > 0) {
            nr.disabled = true
            nr.children = getTreeData(m.children)
        }
        return nr
    })
    return treeData
}