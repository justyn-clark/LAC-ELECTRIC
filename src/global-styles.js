import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  .awssld {
    --organic-arrow-color: white;
    --loader-bar-color: #f20079;
    }
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
    background: white;
    overflow: ${({ modalOpen }) => (modalOpen ? 'hidden' : 'visible')};  
    overflow-x: hidden;
  }
  
  main {
    height: 100%;
  } 
  
  h1, h2, h3, h4 {
    text-transform: uppercase;
  }
  
  h1 {  
    margin-bottom: 0;
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
