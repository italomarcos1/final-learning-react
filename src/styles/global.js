import { createGlobalStyle } from 'styled-components';
import bg from '../assets/background.svg';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
}

body {
  background: no-repeat;
  background-color:#777;
  background-image: url(${bg});
  background-size: cover;
  background-position: calc(100%);
  -webkit-font-smoothing: antialiased !important;
}

button {
  cursor: pointer;
}

`;
