import type { ReactNode } from 'react';
import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
import type { Locale } from '~/core/types';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { DynamicLinks } from 'remix-utils';
import { json } from '@remix-run/node';
import { getCountryFromRequest, getLocaleFromRequest } from '~/core/utils';
import { permanentRedirect } from '~/core/permanentReidrect';
import resetStyleUrl from '~/styles/preflight.css';
import globalStyleUrl from '~/styles/globalStyleUrl.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: resetStyleUrl },
  { rel: 'stylesheet', href: globalStyleUrl },
];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Tower Site',
  viewport: 'width=device-width,initial-scale=1',
});

type LoaderData = {
  locale: Locale;
  country: string;
};
export const loader: LoaderFunction = async ({ request }) => {
  await permanentRedirect(request);
  const locale = getLocaleFromRequest(request);
  const country = await getCountryFromRequest(request);
  return json<LoaderData>({ locale: locale as Locale, country });
};

export default function Root() {
  const { locale } = useLoaderData();
  return (
    <Document locale={locale}>
      <Outlet />
    </Document>
  );
}

type DocumentProps = {
  locale: Locale;
  children: ReactNode;
};
const Document = ({ locale }: DocumentProps) => (
  <html lang={locale}>
    <head>
      <Meta />
      <DynamicLinks />
      <Links />
      {typeof document === 'undefined' ? '__STYLES__' : null}
    </head>
    <body>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);
