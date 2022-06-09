import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string
    colors: {
      backgroundMainStart: string
      backgroundMainEnd: string
      textMain: string
    }
  }
}
