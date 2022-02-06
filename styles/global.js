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

  .select-box--container {
    height: 30px;
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
    z-index: 2;
  }
  
  .select-box--box {
    width: 200px;
  }
  
  .select-box--selected-item {
    display: inline-block;
    height: 100%;
    width: 100%;
    padding: 4px 12px;
    vertical-align: middle;
  }
  
  .select-box--items {
    // border: 1px solid #efefef;
    background-color: #fff;
    width: 350px;
    margin-top: 10px;
    display: inline-block !important;
    position: absolute;
    left: 0;
    top: 30px;
  }

  .select-box--items div {
    padding: 6px;
    padding-left: 20px;
  }
  
  .select-box--arrow {
    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0;
    display: inline-block;
    position: absolute;
  }
  
  .select-box--arrow-down {
    position: absolute;
    top: 12px;
    right: 35px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid #dddddd;
  }
  
  .select-box--arrow-up {
    position: absolute;
    top: 12px;
    right: 35px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid #dddddd;
  }
  
`;

export default GlobalStyle;