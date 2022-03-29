import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }
  body {
    background-color: #F2F2F2;
  },
`;

export default GlobalStyle;