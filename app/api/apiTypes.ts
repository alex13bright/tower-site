import { Locale } from '~/components/root/Locale'

export type LocaleItem = {
  code: Locale
  isDefault: boolean
}
export type LocaleList = LocaleItem[]

export type Pagination = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
export type ApiListResponse<T> = {
  data: T[]
  meta: {
    pagination: Pagination
  }
}

export type NetworkType = {
  data: {
    id: number
    attributes: {
      name: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      // rooms: { data: Room[] };
      locale: Locale
      localizations?: { data: NetworkType[] }
    }
  }
}
export type RoomType = {
  id: number
  attributes: {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: Locale
    localizations?: { data: RoomType[] }
    main: {
      id: string
      network: {
        data: NetworkType[]
      }
    }
  }
}
