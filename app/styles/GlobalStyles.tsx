import { createGlobalStyle } from 'styled-components'
import { background, primary, proximaNova } from '~/styles/styles'
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
    font-family: ${proximaNova};
    color: ${primary};
    background-color: ${background};
    font-size: 17px;
    line-height: 1.5em;
  }

  h1, h2 {
    line-height: 1.2em;
  }

  p {
    margin: 0 0 20px;
    overflow: hidden;
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
