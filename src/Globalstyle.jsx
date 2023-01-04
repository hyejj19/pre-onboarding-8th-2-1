import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --background: #fff;
  --main-color: #B5D5C5;
  --point-color: #ECA869;
  --font-color: #222222;
  --hover-color: #F5F5DC;
  --border-color:#B2B2B2;
}
* {
  box-sizing: border-box;
  color: var(--font-color);
  margin: 0;
  padding: 0;
  font-size: 16px;
}
`;

export default GlobalStyle;
