export const langs = ['en', 'ru', 'es'] as const
export type Lang = typeof langs[number]

export const countries = ['USA', 'Russia', 'UK', 'Spain'] as const
export type Country = typeof countries[number]

export type Locale = {
  lang: Lang
  country: Country
}

export type PageMetaType = {
  title: string
  description: string
}

export type ContentMetaType = {
  author: string
  created: string
  updated: string
}

export type TocItemType = {
  title: string
  id: string
}

export type TocType = TocItemType[]

export type PageType = {
  type: string
  title: string
  url: string
  isActive: boolean
}

export type ActivePageType = {
  type: string
  title: string
  url: string
  pageMeta: PageMetaType
  contentMeta: ContentMetaType
  h1: string
  rawContent: string
  content: string
  toc: TocType
}

export type BonusType = {
  bonus: string
  rakeback: string
  deposit: string
  maxBonus: string
}

export type RatingsType = {
  reliability: number
  bonusesPromotions: number
  gameSelection: number
  casualPlayers: number
  softwareConvenience: number
  depositsWithdrawals: number
}

export type DevicesType = string[]

export type PaymentsType = string[]

export type KeyFactsType = string[]

export type ImageType = {
  url: string
  alt: string
}

export type NetworkType = {
  url: string
  title: string
  logo: ImageType
}

export type TocModeType = 0 | 1

export type RoomType = {
  slug: string
  title: string
  isCountryAccepted: boolean
  roomType: string
  licenseCountry: string
  network: NetworkType
  logo: ImageType
  squareLogo: ImageType
  keyFacts: KeyFactsType
  bonusCode: string
  bonus: BonusType
  ratings: RatingsType
  devices: DevicesType
  payments: PaymentsType
  pages: PageType[]
  activePage: ActivePageType
}
