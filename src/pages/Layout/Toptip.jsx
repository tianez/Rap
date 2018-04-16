import React, { Component } from "react";

import styled from "styled-components";

const ToptipView = styled.div`
    padding: 0.1rem;
    font-size: 0.16rem;
    text-align: center;
    background: #f1f1f1;
    color: #f00;
`;

const Toptip = ({ children }) => {
    return <ToptipView>{children}</ToptipView>;
};

export default Toptip;
