import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea {
    font: 14px Roboto, sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }

  button {
    border: 0;

    &:hover {
      cursor: pointer;
    }

  }

`;