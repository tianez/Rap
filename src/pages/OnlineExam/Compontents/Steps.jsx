import React, { Component } from 'react'
import styled from "styled-components";

const Warper = styled.div`
color: #108ee9;
line-height: 0.4rem;
padding: 0 0.15rem;
display: flex;
background: #f4f4f4;
border-bottom: 1px solid #f1f1f1;
`;

const Stepd = styled.div`
flex: 1;
`;

const Steps = ({ cur, curItem, list, totalscore }) => {
    return (
        <Warper>
            {/* <Stepd>{curItem.type*1 == 1 ? '单选题' : '多选题'}（共{list.length}题，合计{totalscore}分）</Stepd> */}
            <Stepd>{curItem.type*1 == 1 ? '单选题' : '多选题'}</Stepd>
            <div>{cur + 1}/{list.length}</div>
        </Warper>
    )
}

export default Steps