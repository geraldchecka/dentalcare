import { createGlobalStyle } from 'styled-components';
// import OpenSans from './fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf';
// import Arimo from './fonts/Arimo/Arimo-VariableFont_wght.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Open Sans"), url(/fonts/OpenSans-VariableFont_wdth,wght.ttf) format('truetype');
    text-decoration: none;
  }
  @font-face {
    font-family: "Arimo";
    font-style: normal;
    font-weight: 400;
    font-display: block;
    src: local("Arimo"), url(/fonts/Arimo-VariableFont_wght.ttf) format('truetype');
    text-decoration: none;
  }
  @font-face {
    font-family: "Playfair_Display";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Playfair_Display"), url(/fonts/PlayfairDisplay-VariableFont_wght.ttf) format('truetype');
    text-decoration: none;
  }
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;