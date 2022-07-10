import { Room } from '~/components/room/Room'
import { json, LoaderFunction } from '@remix-run/node'
import { roomData } from '~/api/fake-data/roomData'
import { RoomType } from '~/api/fake-data/dataTypes'
import { getDirectusClient } from '~/core/directus'
import * as fs from 'fs'
import { directusLang, getLangFromRequest } from '~/core/utils'
export type LoaderData = { room: RoomType }

export const loader: LoaderFunction = async ({ request, params }) => {
  const { roomPageSlug } = params
  if (roomPageSlug === undefined) throw new Error()
  const [roomSlug, pageType] = roomPageSlug.split('-')
  const lang = await getLangFromRequest(request)
  const directus = await getDirectusClient()

  const response = await directus.items('rooms').readByQuery({
    fields: '*,translations.*,translations.pages.*,translations.pages.type.*',
    filter: {
      // @ts-ignore
      slug: {
        _eq: roomSlug,
      },
    },
    deep: {
      translations: {
        _filter: { languages_code: { _eq: directusLang[lang] } },
        // @ts-ignore
        pages: {
          _filter: { title: { _eq: 'en review title' } },
        },
      },
    },
  })
  fs.writeFileSync(`${process.cwd()}/_log.response.json`, JSON.stringify(response, null, 2))
  const networks = response.data
  if (!networks) throw new Error()
  const network = networks[0]

  const data = { room: roomData }
  return json<LoaderData>(data)
}

export default function RoomRoute() {
  return <Room />
}
