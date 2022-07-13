export type PageMetaType = {
  title: string
  description: string
}

export type ContentMetaType = {
  author: string
  created: string
  updated: string
}

export type PageType = {
  type: string
  url: string
  isActive: boolean
  pageMeta: PageMetaType
  contentMeta: ContentMetaType
  h1: string
  content: string
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

export type RoomType = {
  slug: string
  title: string
  isAccepted: boolean
  roomType: string
  network: NetworkType
  logo: ImageType
  keyFacts: KeyFactsType
  bonusCode: string
  bonus: BonusType
  ratings: RatingsType
  devices: DevicesType
  payments: PaymentsType
  pages: PageType[]
  activePage: number
}
