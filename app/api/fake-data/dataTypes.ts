import { Locale } from '~/components/root/Locale'

export type Geo = {
  locale: Locale
  country: string
}

export const devices = ['IOS', 'macOS', 'Windows', 'Android', 'Web'] as const
export type Device = typeof devices[number]

export const payments = [
  'american-express',
  'astropay',
  'bangkok-bank',
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

export type TocType = { anchor: string; title: string }[]

export type LinkType = {
  title: string
  url: string
  isActive?: boolean
}

export type RatingsType = {
  reliability: number
  bonusesPromotions: number
  gameSelection: number
  casualPlayers: number
  softwareConvenience: number
  depositsWithdrawals: number
}

export type NetworkType = {
  name: string
  title: string
  logo: string
}

export type RoomType = {
  title: string
  bonus: string
  rakeback: string
  logo: string
  roomType: string
  license: string
  country: string
  payments: Payment[]
  network: NetworkType
  advantages: string[]
  ratings: RatingsType
  devices: Device[]
  navs: LinkType[]
  toc: TocType
  pageMeta: PageMetaType
}

export type PageMetaType = {
  author: string
  created: string
  updated: string
}