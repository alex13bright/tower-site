import { Locale } from '~/components/Locale'

export type Geo = {
  locale: Locale
  country: string
}

export const devices = ['IOS', 'macOS', 'Windows', 'Android', 'Web'] as const
export type Device = typeof devices[number]

export const payments = [
  'american-express',
  'astropay',
  'bangkok-bank-white',
  'bitcoin',
  'cashfree',
  'ecopayz',
  'entropay',
  'kasikorn-bank',
  'krungsri-bank',
  'mastercard',
  'moneygram',
  'muchbetter',
  'neteller',
  'paypal',
  'paysafecard',
  'paytm',
  'payumoney',
  'qiwi',
  'sberbank',
  'scb',
  'skrill',
  'visa',
  'vtb',
  'webmoney',
  'yandex-money',
] as const
export type Payment = typeof payments[number]
