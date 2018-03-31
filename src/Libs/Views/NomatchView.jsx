import React from 'react';
import styled from "styled-components";

const Nomatch = styled.div`
    padding: 0.15rem ;
    font-size: 0.26rem;
    text-align: center;
    flex: 1;
`;

const NomatchView = ({ children = '404' }) => {
    return <Nomatch>{children}</Nomatch>
}

export default NomatchView