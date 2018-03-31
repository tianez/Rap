import React, { Component } from 'react'

import Warper from './Warper';
import Time from '../Time';

const DateType = (props) => {
    return (
        <Warper title={props.filedTitle}>
            <Time time={props.filedValue} />
        </Warper>
    )
}

export default DateType