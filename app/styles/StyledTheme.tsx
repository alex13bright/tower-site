import { createContext, ReactElement, ReactNode, useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { defaultTheme } from '~/styles/default-theme'

type ThemeContextType = {
  setTheme: (theme: DefaultTheme) => void
}

export const SetThemeContext = createContext<ThemeContextType | null>(null)

type Props = {
  children: ReactNode
}
export const StyledComponentsTheme: (props: Props) => ReactElement = ({ children }) => {
  const [theme, setTheme] = useState<any>(defaultTheme)
  return (
    <SetThemeContext.Provider value={{ setTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SetThemeContext.Provider>
  )
}
