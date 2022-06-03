import type { Locale } from '~/core/types';

export const getLocaleFromRequest = (request: Request): Locale => {
  const headers = request.headers;
  const acceptLanguages = headers.get('Accept-Language');
  if (acceptLanguages) {
    const [locale] = acceptLanguages.split(',');
    if (locale === 'en' || locale === 'ru') {
      return locale;
    }
  }
  return 'en';
  // throw new Error(`can't get locale out of 'Accept-Language' request header`);
};
