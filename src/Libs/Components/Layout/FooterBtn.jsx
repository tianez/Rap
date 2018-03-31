import React from "react";
import styled from "styled-components";

const FooterView = styled.div`
    height: 0.56rem;
    min-height: 0.56rem;
    padding: 0.1rem 0.15rem;
`;

const BtnView = styled.div`
    height: 0.36rem;
    min-height: 0.36rem;
    line-height: 0.36rem;
    text-align: center;
    color: #fff;
    font-size: 0.16rem;
    background: #108ee9;
    border-radius: 0.02rem;
`;

const FooterBtn = ({ onClick, title = "保存" }) => {
    return (
        <FooterView>
            <BtnView onClick={onClick}>{title}</BtnView>
        </FooterView>
    );
};

export default FooterBtn;
