import React, { Component } from 'react'
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

import styles from "./Thumbs.scss";

import Thumb from './Thumb'

class Thumbs extends Component {
    static defaultProps = {
        options: [
            { label: '单图右', value: 0 },
            { label: '单图下', value: 1 },
            { label: '三图', value: 2 },
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        }
    }
    handleChange = (e) => {
        let { onChange } = this.props
        let value = e.target.value
        onChange && onChange('mode', value)
    }
    render() {
        let { options, onChange, data } = this.props
        let { mode } = data
        return (
            <div>
                <Thumb onChange={onChange} data-name='titleImg' name='titleImg' imgsrc={data.titleImg} />
                {mode == 2 ?
                    <div className={styles.moreimg}>
                        <Thumb className={styles.typeImg} onChange={onChange} data-name='typeImg' name='typeImg' imgsrc={data.typeImg} />
                        <Thumb className={styles.contentImg} onChange={onChange} data-name='contentImg' name='contentImg' imgsrc={data.contentImg} />
                    </div> :
                    null
                }
                <RadioGroup options={options} className={styles.rdgroup} onChange={this.handleChange} value={mode}>
                    {/* <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio> */}
                </RadioGroup>
            </div>
        )
    }
}

export default Thumbs