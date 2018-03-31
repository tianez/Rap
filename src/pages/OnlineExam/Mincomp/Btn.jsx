import styled, { ThemeProvider, css } from "styled-components";

const Btn = styled.div`
  display: block;
  text-align: center;
  background: ${props => (props.disabled ? "#ccc" : "#108ee9")};
  font-size: 0.16rem;
  color: #fff;
  flex: 1;
  ${props =>
    props.border &&
    css`
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    `};
`;

export default Btn;
