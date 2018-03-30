import React, { Component } from 'react'

const Time = ({ time }) => {
    let date = new Date(parseInt(time))
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours();
    h = h < 10 ? '0' + h : h
    let m = date.getMinutes();
    m = m < 10 ? '0' + m : m
    let s = date.getSeconds();
    s = s < 10 ? '0' + s : s
    let out = Y + M + D + h + ':' + m + ':' + s
    return <span>{out}</span>
}

export default Time