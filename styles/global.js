import 'normalize.css';

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: "Lato", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    scroll-behavior: smooth;
  }
`;
