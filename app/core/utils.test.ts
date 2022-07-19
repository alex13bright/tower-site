import { getLangFromRequest } from './utils'
import { Request } from '@remix-run/node'

test(`getLocaleFromRequest`, () => {
  expect(getLangFromRequest({ url: `https://worldpokerdeals.com/` } as Request)).toBe('en')
  expect(getLangFromRequest({ url: `https://ru.worldpokerdeals.com/` } as Request)).toBe('ru')
  expect(getLangFromRequest({ url: `https://es.worldpokerdeals.com/` } as Request)).toBe('es')
})
