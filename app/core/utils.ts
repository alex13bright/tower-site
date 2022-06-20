import { Locale, useLocale } from '~/components/root/Locale'
import { DefaultTheme, FlattenInterpolation, ThemedStyledProps } from 'styled-components'
import { RatingsType } from '~/api/fake-data/dataTypes'
import chroma from 'chroma-js'

export type Css<T> = FlattenInterpolation<ThemedStyledProps<T, DefaultTheme>> | ''

export const fakeUse = (...rest: any[]) => {
  rest.forEach((r) => r)
}

const getIpFromHeaders = (headers: Headers) => {
  return headers.get('x-forwarded-for')
}

const getLocaleFromHeaders = (headers: Headers) => {
  const acceptLanguages = headers.get('Accept-Language')
  if (acceptLanguages) {
    const [locale] = acceptLanguages.split(',')
    if (locale === 'en' || locale === 'ru' || locale === 'es') {
      return locale
    }
  }
  throw new Error(`can't get locale out of 'Accept-Language' request header`)
}

export const getLocaleFromRequest = (request: Request): Locale => {
  const hostname = new URL(request.url).hostname
  const [first] = hostname.split('.')
  if (first === 'ru' || first === 'es') return first
  return 'en'
}

export const getCountryFromRequest = async (request: Request) => {
  // const standardHeader = 'x-forwarded-for'
  // const cloudFlareHeader = 'CF-Connecting-IP'
  // const cloudFlareCountryHeader = 'CF-IPCountry'
  // const ip = request.headers.get('');
  // freegeoip.net/{format}/{IP_or_hostname}
  fakeUse(request)
  return 'russia'
}

export const getRequestGeo = () => {}

export type I18n<Trans> = { en: Trans; ru: Trans; es: Trans }
export const useLocalized = <Trans>(i18n: I18n<Trans>): Trans => i18n[useLocale()]

export const calcRating = (ratings: RatingsType): number => {
  const values = Object.values(ratings)
  return values.reduce((sum, rating) => sum + rating, 0) / values.length
}

export const darken = (color: string, intensity: number): string =>
  chroma(color).darken(intensity).hex()
