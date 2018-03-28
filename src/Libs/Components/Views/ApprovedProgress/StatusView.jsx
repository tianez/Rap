import styled from "styled-components";

const StatusView = styled.div`
  color: ${props => (props.disabled ? "#f00" : "green")};
`;

export default StatusView;
