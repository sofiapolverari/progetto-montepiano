import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Afficher-Neue';
  src: url("./fonts/LTAfficherNeue-Text.otf") format('otf');
}
@font-face {
    font-family: 'Afficher-Neue';
  src: url("./fonts/LTAfficherNeue-BoldText.otf") format('otf');
  font-weight: 700 1000;
}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family:'Afficher-Neue';
    background-color: #e9e5d9;
  }
  * {
    box-sizing: border-box;
    margin: 0
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
