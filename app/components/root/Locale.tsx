import React, { ReactElement, createContext, useContext, ReactNode } from 'react'
import { Lang } from '~/api/fake-data/apiTypes'

const Context = createContext<Lang | null>(null)

type ContextProps = { locale: Lang; children?: ReactNode }

export const LocaleContext = ({ locale, children }: ContextProps): ReactElement => {
  return <Context.Provider value={locale}>{children}</Context.Provider>
}

export const useLocale = (): Lang => {
  const locale = useContext(Context)
  if (locale === null) throw new Error(`LocaleContext is not found`)
  return locale
}
