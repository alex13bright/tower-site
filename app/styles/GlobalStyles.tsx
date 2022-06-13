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
    font-family: 'Proxima Nova, -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji';
  }
`
