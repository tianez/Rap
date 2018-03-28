import React, { Component } from "react";
// import { Link } from 'react-router-dom'

import Link from "Extended/Link";
import { AuthComponent } from "Hoc/Authorized";

import styles from "./Lists.scss";

export default class Lists extends Component {
    constructor() {
        super();
    }
    render() {
        return lists.map(data => {
            return (
                <AuthComponent key={data.title} auth={data.auth}>
                    <div key={data.title} className={styles.lists}>
                        <div className={styles.title}>{data.title}</div>
                        <div className={styles.list}>
                            {data.list.map(d => {
                                let C = d.url ? Link : "div";
                                return (
                                    <AuthComponent key={d.name} auth={d.auth}>
                                        <C to={d.url} key={d.name} className={styles.link}>
                                            <div className={d.icon + " " + styles.icon} style={d.style} />
                                            <div className={styles.name}>{d.name}</div>
                                        </C>
                                    </AuthComponent>
                                );
                            })}
                            <div className="clear" />
                        </div>
                    </div>
                </AuthComponent>
            );
        });
    }
}
