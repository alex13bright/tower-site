import { getLocaleFromRequest } from './utils';
import type { Request } from '@remix-run/node';

test(`getLocaleFromRequest`, () => {
  expect(getLocaleFromRequest({ url: `https://worldpokerdeals.com/` } as Request)).toBe('en');
  expect(getLocaleFromRequest({ url: `https://ru.worldpokerdeals.com/` } as Request)).toBe('ru');
  expect(getLocaleFromRequest({ url: `https://es.worldpokerdeals.com/` } as Request)).toBe('es');
});
