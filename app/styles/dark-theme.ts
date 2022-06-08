import { defaultTheme } from './default-theme'
import { DefaultTheme } from 'styled-components'

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  text: { colors: { main: '#fff' } },
}
