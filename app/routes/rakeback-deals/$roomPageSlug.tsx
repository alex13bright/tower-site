import { Room } from '~/components/room/Room'
import { json, LoaderFunction } from '@remix-run/node'
import { getDirectusClient } from '~/core/directus'
import * as fs from 'fs'
import { directusLang, getCountryFromRequest, getLangFromRequest } from '~/core/utils'

export const loader: LoaderFunction = async ({ request, params }) => {
  const { roomPageSlug } = params
  if (roomPageSlug === undefined) throw new Error()
  const [roomSlug, pageType] = roomPageSlug.split('-')
  const lang = await getLangFromRequest(request)
  const country = await getCountryFromRequest(request)
  const directus = await getDirectusClient()

  const selectFields = [
    '*',
    'payments.payments_id.name',
    'type.name',
    'type.translations.title',
    'translations.*',
    'translations.pages.*',
    'translations.pages.type.translations.title',
    'devices.devices_id.name',
    'logo.*',
  ]
  const response = await directus.items('rooms').readByQuery({
    fields: selectFields.join(','),
    filter: {
      // @ts-ignore
      slug: {
        _eq: roomSlug,
      },
    },
    deep: {
      accepted_countries: { _filter: { countries_id: { _eq: country } } },
      translations: {
        _filter: {
          languages_code: { _eq: directusLang[lang] },
          pages: { type: { name: { _eq: pageType } } },
        },
        // @ts-ignore
        pages: {
          _filter: { type: { name: { _eq: pageType } } },
          type: {
            translations: {
              _filter: {
                languages_code: { _eq: directusLang[lang] },
              },
            },
          },
        },
      },
    },
  })
  fs.writeFileSync(`${process.cwd()}/_log.response.json`, JSON.stringify(response, null, 2))
  const data = { room: response.data }
  return json(data)
}

export default function RoomRoute() {
  return <Room />
}
