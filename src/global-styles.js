import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
  }
  
  html,
  body {
    height: 100%;
    width: 100%;   
  }

  body {
    font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
    overflow-x: hidden;
    // overflow-y: ${({ open }) => (open ? 'hidden' : 'visible')};  
    background: white;
  }
  
  main {
    height: 100%;
    position: relative;
  } 
  
  h1, h2, h3, h4 {
    text-transform: uppercase;
  }
  
  h1 {  
    color: #1e283a;    
    font-size: 36px;
    font-weight: 700;
    text-align: center;
  }
  
  h2 {
    color: #1e283a;  
    font-size: 36px;
    font-weight: 700;
    text-align: center;
  }
  
  h4 {
    font-size: 18px;
    line-height: 24px;
  }
  
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  
  p {
    line-height: 1.5;
  }
`;

export default GlobalStyle;
