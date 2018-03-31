import React, { Component } from 'react'
import Warper from './Warper';

const Text = (props) => {
    return (
        <Warper title={props.filedTitle}>
            <div dangerouslySetInnerHTML={{__html: props.filedValue}} />
        </Warper>
    )
}

export default Text