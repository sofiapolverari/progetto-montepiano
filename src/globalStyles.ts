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

  body {
    margin: 0;
    padding: 0;
    font-family:'Afficher-Neue';
  }
`;

export default GlobalStyle;
