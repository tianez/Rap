import React, { Component } from 'react'

import styled, { ThemeProvider } from 'styled-components';

const iW = '0.5rem'
const ViewAvatar = styled.div`
  display: block;
  width: ${props => props.theme.width || iW};
  height: ${props => props.theme.width || iW};
  border-radius:${props => props.theme.width || iW};
  line-height:${props => props.theme.width || iW};
  overflow: hidden;
  text-align: center;
  background: #3692fa;
  font-size: 0.14rem;
  color: #fff;
`;

const Avatar = ({ children, theme = {} }) => {
  return <ThemeProvider theme={theme}><ViewAvatar>{children.slice(-2)}</ViewAvatar></ThemeProvider>
}

export default Avatar
