import { defaultTheme } from './defaultTheme'
import { DefaultTheme } from 'styled-components'

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    textMain: '#fff',
  },
}
