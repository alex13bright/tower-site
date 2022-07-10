type Language = {
  code: string
  name: string
}

type Device = {
  id: number
  sort: number
  name: string
}

type Payment = {
  id: number
  sort: number
  name: string
}

type RoomTrans = {
  id: number
  room_page_types_id: number
  languages_code: string
  title: string
}

type Room = {
  id: string
  sort: number
  name: string
  status: string
  rooms: Room
  translations: RoomTrans
}

type NetworkTrans = {
  id: number
  room_page_types_id: number
  languages_code: string
  title: string
}

type Network = {
  id: string
  sort: number
  name: string
  status: string
  rooms: Room
  translations: NetworkTrans
}

type RoomTypeTrans = {
  id: number
  room_page_types_id: number
  languages_code: string
  title: string
}

type RoomType = {
  id: number
  sort: number
  name: string
  translations: RoomTypeTrans
}

type RoomPageTypeTrans = {
  id: number
  room_page_types_id: number
  languages_code: string
  title: string
}

type RoomPageType = {
  id: number
  sort: number
  name: string
  translations: RoomPageTypeTrans
}

type Country = {
  id: string
  sort: number
}

type AuthorTrans = {
  id: number
  authors_id: string
  languages_id: string
  title: string
}

export type Author = {
  id: string
  name: string
  translations: AuthorTrans
}

export type Schema = {
  languages: Language
  countries: Country
  devices: Device
  payments: Payment
  authors_translations: AuthorTrans
  authors: Author
  network_translations: NetworkTrans
  networks: Network
  room_page_type: RoomPageType
  room_type_translations: RoomTypeTrans
  roomType: RoomType
  room_translations: RoomTrans
  rooms: Room
}
