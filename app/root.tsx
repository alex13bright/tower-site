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
import type { Locale } from '~/core/types';
import { json } from '@remix-run/node';
import { getLocaleFromRequest } from '~/core/utils';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Tower Site',
  viewport: 'width=device-width,initial-scale=1',
});

type LoaderData = {
  locale: Locale;
};
export const loader: LoaderFunction = async ({ request }) => {
  const locale = getLocaleFromRequest(request);
  return json<LoaderData>({ locale: locale as Locale });
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
