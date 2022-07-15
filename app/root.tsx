import { ReactNode } from 'react'
import { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import { DynamicLinks, useRouteData } from 'remix-utils'
import { json } from '@remix-run/node'
import { getCountryFromRequest, getLangFromRequest } from '~/core/utils'
import normalizeStylesUrl from '~/styles/normalizeStyles.css'
import { PageLayout } from '~/components/page/PageLayout'
import { GlobalStyles } from '~/styles/GlobalStyles'
import { LocaleContext, useLocale } from '~/components/root/Locale'
import { Locale } from '~/core/types'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: normalizeStylesUrl },
  { rel: 'stylesheet', href: '/fonts/ProximaNova/styles.css' },
]

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Tower Site',
  viewport: 'width=device-width,initial-scale=1',
})

type LoaderData = {
  locale: Locale
}

export const loader: LoaderFunction = async ({ request }) => {
  const lang = await getLangFromRequest(request)
  const country = await getCountryFromRequest(request)
  return json<LoaderData>({ locale: { lang, country } })
}

export default function Root() {
  const { locale } = useLoaderData<LoaderData>()
  return (
    <LocaleContext locale={locale}>
      <Document>
        <PageLayout>
          <Outlet />
        </PageLayout>
      </Document>
    </LocaleContext>
  )
}

type DocumentProps = {
  children: ReactNode
}
const Document = ({ children }: DocumentProps) => {
  const locale = useLocale()
  // const { documentMeta } = useRouteData('routes/rakeback-deals/$roomPageSlug')
  // if (typeof documentMeta !== 'object') throw new Error()
  // const { title, description } = documentMeta
  return (
    <html lang={locale.lang}>
      <head>
        {/*<title>{title}</title>*/}
        {/*<meta name="description" content={description} />*/}
        <Meta />
        <DynamicLinks />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        {children}
        <GlobalStyles />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
