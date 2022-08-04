import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-soothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


/* Scrool */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #8888889c;
}

::-webkit-scrollbar-thumb:hover {
  background: #888888b8;
}

${({ theme }) => css`
  html {
    font-size: 24px;
  }

  body {
    font-family: ${theme.font.family};
  }
`}

`

export default GlobalStyle
