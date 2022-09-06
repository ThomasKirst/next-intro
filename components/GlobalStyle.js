import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif; 
  }

  main {
    padding: 1rem;
  }
`;

export default GlobalStyle;
