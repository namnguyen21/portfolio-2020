import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 10px;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body, html {
      /* background-color: hsla(50, 9%, 87%, 1); */
      background-color: #3e4c59;
      font-family: 'Barlow Semi Condensed', sans-serif;
      padding: 0;
      margin: 0;
  }
`;

export default GlobalStyle;
