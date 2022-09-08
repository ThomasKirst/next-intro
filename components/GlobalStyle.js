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

  input, button, select {
    padding: 0.25rem;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
