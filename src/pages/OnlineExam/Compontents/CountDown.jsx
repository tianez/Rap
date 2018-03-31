/**
 * 倒计时
 */
import React, { Component } from 'react'

export default class CountDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 0
        }
        this.setIntervalTime = null
    }
    componentDidMount() {
        let { id, time, onTimeOut } = this.props
        let timestamp = Date.parse(new Date());
        localStorage['onlineexam_time_' + id] = timestamp
        // let startTime
        // if (localStorage['onlineexam_time_' + id]) {
        //     startTime = localStorage['onlineexam_time_' + id] * 1
        // } else {
        //     localStorage['onlineexam_time_' + id] = timestamp
        //     startTime = timestamp
        // }
        // let stime = Date.parse(new Date()) - startTime
        // if (stime > time * 1000) {
        //     onTimeOut && onTimeOut()
        //     return
        // }
        // time = time - parseInt(stime / 1000)
        this.setIntervalTime = setInterval(() => {
            time = time - 1
            this.setState({
                time: time
            })
            if (time == 0) {
                onTimeOut && onTimeOut()
                clearInterval(this.setIntervalTime)
            }
        }, 1000);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isover) {
            clearInterval(this.setIntervalTime)
        }
    }
    componentWillUnmount() {
        clearInterval(this.setIntervalTime)
    }
    render() {
        let { overtitle, isover } = this.props
        let { time } = this.state
        if (time == 0 || isover) {
            return <div>{overtitle || '答题时间到'}</div>
        }
        let _ = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09']
        let h = parseInt(time / 3600)
        let m = parseInt((time % 3600) / 60)
        let s = parseInt(time % 60)
        let res = [_[h] || h, _[m] || m, _[s] || s].join(":")
        return res
    }
}


