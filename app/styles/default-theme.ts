import { DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    laptop: '1280px',
    desktop: '1440px',
  },
  background: {
    colors: {
      main: {
        start: '#2b2e3b',
        end: '#20222c',
      },
    },
  },
  text: {
    colors: {
      main: '#ccc',
    },
  },
}
