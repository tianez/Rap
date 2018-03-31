/**
 * 打卡按钮
 */
import React, { Component } from "react";
import styled from "styled-components";

const PunchView = styled.div`
    position: relative;
    padding: 0 0.15rem 0.2rem;
    line-height: 0.24rem;
    &:before {
        content: "";
        position: absolute;
        top: 0.05rem;
        z-index: 9;
        background: #108ee9;
        width: 0.1rem;
        height: 0.1rem;
        left: 0;
        border-radius: 0.1rem;
    }
`;

const ButtonView = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    margin: 0.1rem auto 0;
    text-align: center;
    background: #108ee9;
    border-radius: 1.2rem;
    padding: 0.35rem 0;
`;

const TitleView = styled.div`
    font-size: 0.2rem;
    color: #fff;
    line-height: 0.32rem;
`;

const TimeView = styled.div`
    font-size: 0.14rem;
    color: #eee;
    line-height: 0.18rem;
`;

const Punch = ({ dates, data, onClick }) => {
    let title = data.duty == "on" ? "上班时间" : "下班时间";
    return (
        <PunchView>
            <div>
                {title}：{data.clockinginTime}
            </div>
            <ButtonView onClick={() => onClick(data)}>
                <TitleView>{title}</TitleView>
                {dates.hour && <TimeView>{`${dates.hour}:${dates.minute}:${dates.second}`}</TimeView>}
            </ButtonView>
        </PunchView>
    );
};

export default Punch;
