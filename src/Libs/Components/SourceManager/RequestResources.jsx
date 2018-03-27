import React from 'react';

const list = [{
    imgPath: 'http://oz6i4dok7.bkt.clouddn.com/images/avatar/0.jpg',
}, {
    imgPath: 'http://oz6i4dok7.bkt.clouddn.com/images/avatar/1.jpg',
}, {
    imgPath: 'http://oz6i4dok7.bkt.clouddn.com/images/avatar/2.jpg',
}, {
    imgPath: 'http://oz6i4dok7.bkt.clouddn.com/images/avatar/3.jpg',
}, {
    imgPath: 'http://oz6i4dok7.bkt.clouddn.com/images/avatar/4.jpg',
}, {
    imgPath: 'http://oz6i4dok7.bkt.clouddn.com/images/avatar/5.jpg',
}]

const RequestResources = (Component) => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: list || [],
            pages: {
                current: 1,
                pageSize: 20,
                total: 1,
            }
        }
    }
    componentWillMount() {
        let { pageSize } = this.state.pages
        this.handleReqData({ pageSize })
    }
    handleChange = (page) => {
        let { pageSize } = this.state.pages
        this.handleReqData({ pageNo: page, pageSize })
    }
    handleReqData = async ({ pageNo = 1, pageSize = 10 }) => {
        let res = await Request('content/picturePage.jspx', {
            params: {
                pageNo,
                pageSize,
            }
        })
        if (res.success) {
            let { data } = res
            this.setState({
                list: data.list,
                pages: {
                    current: data.pageNo,
                    pageSize: data.pageSize,
                    total: data.totalCount,
                }
            })
        }
    }
    render() {
        let { list, pages } = this.state
        return <Component {...this.props} list={list} pages={pages} onChange={this.handleChange} />
    }
};

export default RequestResources