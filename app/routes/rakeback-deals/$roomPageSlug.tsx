import { Room } from '~/components/room/Room'
import { json, LoaderFunction } from '@remix-run/node'
import { getCountryFromRequest, getLangFromRequest } from '~/core/utils'
import { getRoomData } from '~/api/getRoomData'

export const loader: LoaderFunction = async ({ request, params }) => {
  const { roomPageSlug } = params
  if (roomPageSlug === undefined) throw new Error()
  const [roomSlug, pageType] = roomPageSlug.split('-')
  const lang = await getLangFromRequest(request)
  const country = await getCountryFromRequest(request)

  const room = getRoomData(lang, country, roomSlug, pageType)
  const data = { roomSlug, pageType, room }
  return json(data)
}

export default function RoomRoute() {
  return <Room />
}
