import { redirect } from '@remix-run/node'
import { fetchLocaleList } from '~/api/fetch'
import { narrowType } from '~/core/types'
import { Locale, locales } from '~/api/apiTypes'

const wwwRedirect = (url: URL, first: string, rest: string[]) => {
  if (first.toLowerCase() === 'www') redirectToHostname(url, rest)
}

const redirectToHostname = (url: URL, newHostSubnames: string[]) => {
  url.hostname = newHostSubnames.join('.')
  throw redirect(url.toString(), { status: 301 })
}

export const permanentRedirect = async (request: Request): Promise<Locale> => {
  const url = new URL(request.url)
  const hostName = url.hostname
  const [firstSubname, ...restSubnames] = hostName.split('.')
  wwwRedirect(url, firstSubname, restSubnames)
  const { defaultLocale, localeList } = await fetchLocaleList()
  const locale: Locale | null = narrowType<Locale>(locales, firstSubname)
  if (locale === defaultLocale) redirectToHostname(url, restSubnames)
  if (locale === null) return defaultLocale
  if (locale !== defaultLocale && localeList.includes(locale)) return locale
  return locale
}
