import { getLastTwo, getLocaleFromRequest } from './utils'
import { Request } from '@remix-run/node'

test(`getLocaleFromRequest`, () => {
  expect(getLocaleFromRequest({ url: `https://worldpokerdeals.com/` } as Request)).toBe('en')
  expect(getLocaleFromRequest({ url: `https://ru.worldpokerdeals.com/` } as Request)).toBe('ru')
  expect(getLocaleFromRequest({ url: `https://es.worldpokerdeals.com/` } as Request)).toBe('es')
})

test(`getLastTwo`, () => {
  const url = `www.en.worldpokerdeals.com`.split('.')
  console.log(getLastTwo<string>(url))
})
