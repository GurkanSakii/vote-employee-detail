import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif;
    background-color: #f5f5f5;
    margin: 16px auto;
    max-width: 1200px;
  }
`;

export default GlobalStyle;
