import React, { ReactElement, createContext, useContext, ReactNode } from 'react'
import { Language } from '~/api/apiTypes'

const Context = createContext<Language | null>(null)

type ContextProps = { locale: Language; children?: ReactNode }

export const LocaleContext = ({ locale, children }: ContextProps): ReactElement => {
  return <Context.Provider value={locale}>{children}</Context.Provider>
}

export const useLocale = (): Language => {
  const locale = useContext(Context)
  if (locale === null) throw new Error(`LocaleContext is not found`)
  return locale
}
