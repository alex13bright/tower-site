import { createGlobalStyle } from 'styled-components'
import { primary, proximaNova } from '~/styles/styles'
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
    font-family: ${proximaNova};
  }

  h1 {
    line-height: 1em;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }
  table, caption, tbody, tr, td {
    margin: 0;
    padding: 0;
  }

  button {
    outline: none;
    &:focus {
      outline: none;
    }
  }
`
