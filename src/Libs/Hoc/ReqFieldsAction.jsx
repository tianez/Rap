import React, { Component } from 'react'

const ReqFieldsAction = module => Component => class extends Component {
    state = {
        fields: [],
    }
    componentDidMount = async () => {
        if (!module) {
            return
        }
        let res = await Request('fields/' + module)
        if (res.success) {
            this.setState({
                fields: res.data
            })
        }
    }
    render() {
        return <Component fields={this.state.fields} {...this.props} />
    }
}

export default ReqFieldsAction