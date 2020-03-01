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
  min-height: 100%;
}

body {
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  -webkit-font-smoothing: antialiased !important;
}
`;
