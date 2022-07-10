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
import { DynamicLinks } from 'remix-utils'
import { json } from '@remix-run/node'
import { getCountryFromRequest, getLocaleFromRequest } from '~/core/utils'
import { permanentRedirect } from '~/core/permanentReidrect'
import normalizeStylesUrl from '~/styles/normalizeStyles.css'
import { PageLayout } from '~/components/page/PageLayout'
import { GlobalStyles } from '~/styles/GlobalStyles'
import { LocaleContext, useLocale } from '~/components/root/Locale'
import { Language } from '~/api/apiTypes'
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
  locale: Language
  country: string
}

export const loader: LoaderFunction = async ({ request }) => {
  // await validateHostName()
  await permanentRedirect(request)
  const locale = getLocaleFromRequest(request)
  const country = await getCountryFromRequest(request)
  return json<LoaderData>({ locale: locale as Language, country })
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
  return (
    <html lang={locale}>
      <head>
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
