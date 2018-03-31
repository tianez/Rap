import React, { Component } from 'react'

import styles from './Warper.scss';
const Warper = ({ title, children }) => {
    return (
        <div className={styles.warper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.childrem}>{children}</div>
        </div>
    )
}

export default Warper