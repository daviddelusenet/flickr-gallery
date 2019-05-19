import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { WHITE } from './consts';

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    background-color: ${WHITE};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
