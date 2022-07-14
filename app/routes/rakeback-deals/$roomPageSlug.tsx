import { Room } from '~/components/room/Room'
import { json, LinksFunction, LoaderFunction } from '@remix-run/node'
import { getCountryFromRequest, getLangFromRequest } from '~/core/utils'
import { getRoomData } from '~/cms/getRoomData'
import { RoomType } from '~/core/types'

import contentStyles from '~/styles/content-site.css'
import { Country } from '~/core/types'

// export const links: LinksFunction = () => {
//   return [{ rel: 'stylesheet', href: contentStyles }]
// }

export type LoaderData = {
  room: RoomType
  country: Country
}

export const loader: LoaderFunction = async ({ request, params }) => {
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
