import { redirect } from '@remix-run/node'
import { fetchLocaleList } from '~/api/fetch'
import { Locale, locales } from '~/components/root/Locale'
import { narrowType } from '~/core/types'

const wwwRedirect = (url: URL, first: string, rest: string[]) => {
  if (first.toLowerCase() === 'www') throwHostnameRedirect(url, rest)
}

const throwHostnameRedirect = (url: URL, newHostSubnames: string[]) => {
  url.hostname = newHostSubnames.join('.')
  throw redirect(url.toString(), { status: 301 })
}

export const permanentRedirect = async (request: Request): Promise<void | Locale> => {
  const url = new URL(request.url)
  const hostName = url.hostname
  const [firstSubname, ...restSubnames] = hostName.split('.')
  wwwRedirect(url, firstSubname, restSubnames)
  const { defaultLocale, localeList } = await fetchLocaleList()
  const locale: Locale | null = narrowType<Locale>(locales, firstSubname)
  if (locale === null) return defaultLocale
  if (locale !== defaultLocale && localeList.includes(locale)) return locale
  throwHostnameRedirect(url, restSubnames)
}
