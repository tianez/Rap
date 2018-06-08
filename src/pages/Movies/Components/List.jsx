import React, { Component } from "react";
import { Link } from "react-router-dom";

import LazyWarper from "Components/Layout/LazyWarper";
import Loading from "Components/Layout/Loading";
import styles from "./List.scss";
import axios from "axios";
import { contextConsumers } from "Libs/ContextRudex";
@contextConsumers((state, props) => ({
    data: state.getIn([localStorage.site_id, "news", props.tab.id]) || $obj
}))
export default class List extends Component {
    componentDidMount() {
        // let { tab, data } = this.props;
        // if (data.loaded) {
        //     return;
        // }
        this.getData();
    }
    getData = async () => {
        let { tab, dispatch, data } = this.props;
        let res = await axios("https://api.douban.com/v2/movie/in_theaters", { withCredentials: true });
        console.log(res);

        // if (res.success) {
        //     data = data.set("loaded", true);
        //     data = data.set("list", res.body);
        //     dispatch.setIn([localStorage.site_id, "news", tab.id], data);
        // }
    };
    render() {
        let { tab, data, match } = this.props;
        return (
            <div>11111</div>
            // <LazyWarper className={styles.list}>
            //     <div style={{ height: "100%" }}>
            //         {data.list &&
            //             data.list.map(d => {
            //                 return (
            //                     <Link to={`${match.url}/${d.id}`} key={d.id} className={styles.item}>
            //                         {d.titleImg && (
            //                             <div className={styles.img} style={{ backgroundImage: `url(${d.titleImg})` }} />
            //                         )}
            //                         <div className={styles.detail}>
            //                             <div className={styles.title}>{d.title}</div>
            //                             <div className={styles.info}>{d.releaseDate}</div>
            //                         </div>
            //                     </Link>
            //                 );
            //             })}
            //     </div>
            // </LazyWarper>
        );
    }
}
