import { createGlobalStyle } from 'styled-components';
// import OpenSans from './fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf';
// import Arimo from './fonts/Arimo/Arimo-VariableFont_wght.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-display: block;
    src: local("Open Sans") url(/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf) format('truetype');
    text-decoration: none;
  }
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
  }
  // theme
    // fonts
    // font-spacing
    // letter spacing
    // line-height
    // aliasing smoothing
    // font-size
`;

export default GlobalStyle;