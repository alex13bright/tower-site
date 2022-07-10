export const langs = ['en', 'ru', 'es'] as const
export type Lang = typeof langs[number]

export const countries = ['USA', 'Russia', 'UK', 'Spain'] as const
export type Country = typeof countries[number]

export type Locale = {
  lang: Lang
  country: Country
}
