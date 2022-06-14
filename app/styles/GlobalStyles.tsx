import { createGlobalStyle } from 'styled-components'
import { primary } from '~/styles/styles'
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    margin: 0;
  }

  body {
    color: ${primary};
    font-family: 'Proxima Nova';
  }

  a {
    text-decoration: none;
  }
`
