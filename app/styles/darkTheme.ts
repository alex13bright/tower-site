import { defaultTheme } from './defaultTheme'
import { DefaultTheme } from 'styled-components'

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  id: 'dark',
  colors: {
    ...defaultTheme.colors,
    textMain: '#fff',
  },
}
