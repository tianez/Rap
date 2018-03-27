import styled from "styled-components";

export const ModalView = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.65);
`;

export const ModalWarper = styled.div`
    width: 520px;
    height: auto;
    background: #fff;
    padding: 0;
    margin: 0 auto;
    position: relative;
    top: 30%;
    transform: translateY(-30%);
    border-radius: 4px;
`;

export const MoadlHeader = styled.div`
    padding: 0 24px;
    min-height: 54px;
    line-height: 54px;
    border-radius: 4px 4px 0 0;
    background: #fff;
    color: rgba(0, 0, 0, 0.65);
    border-bottom: 1px solid #e8e8e8;
    position: relative;
    font-size: 18px;
`;

export const MoadlBody = styled.div`
    padding: 16px 24px;
`;

export const MoadlFooter = styled.div`
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    border-radius: 0 0 4px 4px;
`;

export const MoadlClose = styled.div`
    display: block;
    font-style: normal;
    vertical-align: baseline;
    text-align: center;
    text-transform: none;
    text-rendering: auto;
    width: 54px;
    height: 54px;
    line-height: 54px;
    font-size: 26px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.45);
    transition: color 0.3s;
    &:hover {
        color: #444;
    }
`;

export default ModalView;
