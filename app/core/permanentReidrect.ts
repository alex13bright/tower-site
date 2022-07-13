import { redirect } from '@remix-run/node'
import { fetchLocaleList } from '~/cms/fake-data/fetch'
import { narrowType } from '~/lib/libTypes'
import { Lang, langs } from '~/cms/fake-data/apiTypes'

const wwwRedirect = (url: URL, first: string, rest: string[]) => {
  if (first.toLowerCase() === 'www') redirectToHostname(url, rest)
}

const redirectToHostname = (url: URL, newHostSubnames: string[]) => {
  url.hostname = newHostSubnames.join('.')
  throw redirect(url.toString(), { status: 301 })
}

export const permanentRedirect = async (request: Request): Promise<Lang> => {
  const url = new URL(request.url)
  const hostName = url.hostname
  const [firstSubname, ...restSubnames] = hostName.split('.')
  wwwRedirect(url, firstSubname, restSubnames)
  const { defaultLocale, localeList } = await fetchLocaleList()
  const locale: Lang | null = narrowType<Lang>(langs, firstSubname)
  if (locale === defaultLocale) redirectToHostname(url, restSubnames)
  if (locale === null) return defaultLocale
  if (locale !== defaultLocale && localeList.includes(locale)) return locale
  return locale
}
