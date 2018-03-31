import React, { Component } from "react";
import styled from "styled-components";

const Sheet = styled.div`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f8f8f8;
    padding: 0.15rem;
`;

const Item = styled.div`
    background: ${props => (props.disabled ? "#ccc" : "#108ee9")};
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
    color: #fff;
    text-align: center;
    line-height: 0.6rem;
    margin: 0.05rem 0.1rem;
    border-radius: 0.6rem;
    font-size: 0.2rem;
`;

const Tips = styled.div`
    line-height: 0.24rem;
    margin: 0.15rem 0;
`;

const AnswerSheet = ({ list, answer, onClick }) => {
    return (
        <Sheet>
            {list.map((d, index) => (
                <Item onClick={onClick.bind(null, index)} disabled={answer[d.subjectid] == undefined} key={index}>
                    {index + 1}
                </Item>
            ))}
            <Tips>
                <p>蓝色表示你还已经回答的问题</p>
                <p>灰色表示你还未回答的问题</p>
            </Tips>
        </Sheet>
    );
};

export default AnswerSheet;
