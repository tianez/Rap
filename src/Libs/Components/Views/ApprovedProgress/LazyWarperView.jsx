import styled from "styled-components";

import LazyWarper from 'Components/LazyWarper/LazyWarper';

const LazyWarperView = styled(LazyWarper)`
   height: 100%; 
   width: 100%;
   position: relative;
   overflow-y: auto;
   flex: 1;
`;

export default LazyWarperView;