import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { defaultTheme } from '~/styles/defaultTheme'

type ThemeContextType = {
  setTheme: Dispatch<SetStateAction<DefaultTheme>>
}

export const SetThemeContext = createContext<ThemeContextType | null>(null)

type Props = {
  children: ReactNode
}
export const StyledComponentsTheme = ({ children }: Props): ReactElement => {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme)
  const memoizedTheme = useMemo(() => theme, [theme.id])
  return (
    <SetThemeContext.Provider value={{ setTheme }}>
      <ThemeProvider theme={memoizedTheme}>{children}</ThemeProvider>
    </SetThemeContext.Provider>
  )
}
