import { redirect } from '@remix-run/node'
import { fetchLocaleList } from '~/api/fetch'
import { Locale, allLocales, AllLocale } from '~/components/root/Locale'
import { narrowType } from '~/core/types'
import { Payment } from '~/api/fake-data/dataTypes'

const wwwRedirect = (url: URL, subnames: string[]) => {
  const [first, ...rest] = subnames
  if (first.toLowerCase() === 'www') throwHostnameRedirect(url, rest.join('.'))
}

const getDefaultHostName = (subnames: string[]) =>
  subnames.length === 1 ? subnames[0] : subnames.slice(-2).join('.')

const throwHostnameRedirect = (url: URL, newHost: string) => {
  url.hostname = newHost
  throw redirect(url.toString(), { status: 301 })
}

export const permanentRedirect = async (request: Request): Promise<void | Locale> => {
  const url = new URL(request.url)
  const hostName = url.hostname
  const subnames = hostName.split('.')
  wwwRedirect(url, subnames)
  const { defaultLocale, localeList } = await fetchLocaleList()
  if (subnames.length === 2) return defaultLocale
  // this is kind of tricky byt I can't find another way of doing that
  const locale = narrowType<Payment>(allLocales, subnames[0])
  if (locale === null) return 'en'
  if (localeList.includes(locale)) return locale
  throwHostnameRedirect(url, getDefaultHostName(subnames))
}
