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
@font-face {
  font-family: 'Georgia';
  src: url("./fonts/georgia.ttf") format('ttf');
}
@font-face {
  font-family: 'Georgia';
  src: url("./fonts/georgiab.otf") format('ttf');
  font-weight: 700 900;
}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family:'Afficher-Neue';
    background-color: #e9e5d9;
    @media (max-width: 640px) {
      font-family:'Georgia';
    }  
  }
  /* To hide scrollbar if required
  body::-webkit-scrollbar {
      display: none;
    } */
  * {
    box-sizing: border-box;
    margin: 0
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
