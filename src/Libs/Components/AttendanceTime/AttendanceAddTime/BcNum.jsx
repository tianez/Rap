/**
 * 改变班次
 */
import React, { Component } from "react";
import { List, Radio } from "antd-mobile";
const RadioItem = Radio.RadioItem;

const bcs = [
    {
        value: 1,
        title: "1天1次上下班"
    },
    {
        value: 2,
        title: "1天2次上下班"
    },
    {
        value: 3,
        title: "1天3次上下班"
    }
];

const BcNum = ({ onChange, bcnum }) => {
    return (
        <List renderHeader={() => "设置该班次一天内上下班次数"}>
            {bcs.map(i => (
                <RadioItem key={i.value} checked={bcnum === i.value} onChange={() => onChange(i.value)}>
                    {i.title}
                </RadioItem>
            ))}
        </List>
    );
};

export default BcNum;
