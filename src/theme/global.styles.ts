import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    
    a {
      text-decoration: none !important;
      color: inherit;
    }
  }
  body {
    background-color: #FFFFFF;
  },

`;

export default GlobalStyle;
