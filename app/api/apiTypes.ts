export type PageMeta = {
  title: string
  description: string
}

export type ContentMeta = {
  author: 'Rodion Longa'
  created: '08.07.2022'
  updated: '08.07.2022'
}

export type Page = {
  type: string
  url: string
  isActive: boolean
  pageMeta: PageMeta
  contentMeta: ContentMeta
  roomType: string
  h1: string
  content: string
}

export type Bonus = {
  bonus: string
  rakeback: string
  deposit: string
  maxBonus: string
}

export type Ratings = {
  reliability: number
  bonusesPromotions: number
  gameSelection: number
  casualPlayers: number
  softwareConvenience: number
  depositsWithdrawals: number
}

export type Devices = string[]

export type Payments = string[]

export type KeyFacts = string[]

export type Image = {
  url: string
  alt: string
}

export type Network = {
  url: string
  title: string
  logo: Image
}

export type Room = {
  slug: string
  title: string
  isAccepted: boolean
  roomType: 'Licensed'
  network: Network
  logo: Image
  keyFacts: KeyFacts
  bonusCode: string
  bonus: Bonus
  ratings: Ratings
  devices: Devices
  payments: Payments
  pages: Page[]
  activePage: number
}
