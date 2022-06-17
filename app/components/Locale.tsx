import React, { ReactElement, createContext, useContext, ReactNode } from 'react'

export type Locale = 'en' | 'ru' | 'es'

const Context = createContext<Locale | null>(null)

type ContextProps = { locale: Locale; children?: ReactNode }

export const LocaleContext = ({ locale, children }: ContextProps): ReactElement => {
  return <Context.Provider value={locale}>{children}</Context.Provider>
}

export const useLocale = (): Locale => {
  const locale = useContext(Context)
  if (locale === null) throw new Error(`LocaleContext is not found`)
  return locale
}
