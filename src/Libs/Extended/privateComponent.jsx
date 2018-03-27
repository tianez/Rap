import React from 'react'

const delay = async ms => new Promise(resolve => setTimeout(resolve, ms))

import toastAction from 'Components/toast/action';

const PrivateComponent = (Component) => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            noauth: false
        }
    }
    componentWillMount() {
        let { history, location } = this.props
        if (location.pathname == '/home/dt') {
            toastAction('你无权访问' + location.pathname)
            this.setState({
                noauth: true
            })
            if (history.action == 'POP') {
                store.history.replace('/')
            } else {
                window.history.back()
            }
        }
    }
    render() {
        return (
            this.state.noauth ?
                null :
                <Component {...this.props} />
        )
    }
};

export default PrivateComponent