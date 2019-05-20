import React from 'react';
import { css, Global } from '@emotion/core';
import { Theme } from '../styles/theme';

const GlobalStyle = () => (
  <Global<Theme>
    styles={theme => css`
      body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: ${theme.fontSize.body};
      }
    `}
  />
);

export default GlobalStyle;
