import type { ReactNode } from 'react';
import type { LoaderFunction, MetaFunction } from '@remix-run/node';
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
import type { Locale } from '~/api-types/main';
import { json } from '@remix-run/node';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Tower Site',
  viewport: 'width=device-width,initial-scale=1',
});

type LoaderData = {
  locale: Locale;
};
export const loader: LoaderFunction = async ({ request }) => {
  const headers = request.headers;
  const acceptLanguages = headers.get('Accept-Language');
  if (acceptLanguages) {
    const [locale] = acceptLanguages.split(',');
    if (locale === 'en' || locale === 'ru') {
      return json<LoaderData>({ locale: locale as Locale });
    }
  }
  // in future at least fall back to en locale
  throw new Error(`can't get locale from 'Accept-Language' request header`);
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
    </head>
    <body>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);
