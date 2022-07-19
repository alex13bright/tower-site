import { Room } from '~/components/room/Room'
import { json, LoaderFunction } from '@remix-run/node'
import { getCountryFromRequest, getLangFromRequest } from '~/core/utils'
import { getRoomData } from '~/cms/getRoomData'
import { Country } from '~/core/types'
import { RoomType } from '~/core/types'

export type LoaderData = {
  room: RoomType
  country: Country
}

export const loader: LoaderFunction = async ({ request, params }) => {
  console.log('run loader')
  const { roomPageSlug } = params
  if (roomPageSlug === undefined) throw new Error()
  const [roomSlug, pageType] = roomPageSlug.split('-')
  const lang = await getLangFromRequest(request)
  const country = await getCountryFromRequest(request)

  const room = await getRoomData(lang, country, roomSlug, pageType)
  const data = { country, room }
  return json<LoaderData>(data)
}

export default function RoomRoute() {
  return <Room />
}
