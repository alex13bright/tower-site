import { createGlobalStyle } from 'styled-components'
import { background, primary, proximaNova } from '~/styles/styles'
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
  }

  body {
    font-family: ${proximaNova};
    color: ${primary};
    background-color: ${background};
    font-size: 17px;
    line-height: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  ul {
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
