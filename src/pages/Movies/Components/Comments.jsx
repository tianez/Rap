import React, { Component } from "react";
import Loading from "Components/Layout/Loading";
import GetData from "Hoc/GetDataDouBan";
@GetData
export default class Comments extends Component {
    state = {
        comments: [],
        isCache: false
    };
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        let { id } = this.props;
        this.props.getData({ url: `movie/subject/${id}/comments` }, async comments => {
            console.log(comments);
            // this.setState({ comments });
        });
    };
    render() {
        return <div>comments</div>;
    }
}
