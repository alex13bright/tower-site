// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string
      tablet: string
      laptop: string
      desktop: string
    }
    background: {
      colors: {
        main: {
          start: string
          end: string
        }
      }
    }
    text: {
      colors: {
        main: string
      }
    }
  }
}
