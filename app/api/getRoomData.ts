import fs from 'fs'
import { getDirectusClient } from '~/core/directus'
import { directusLang } from '~/core/utils'
import { Country, Lang } from '~/core/types'
import { components } from '~/core/schema'

type Room = components['schemas']['ItemsRooms']
type RoomsTranslation = components['schemas']['ItemsRoomsTranslations']

export const getRoomData = async (
  lang: Lang,
  country: Country,
  roomSlug: string,
  pageType: string
) => {
  const directus = await getDirectusClient()

  const selectFields = [
    '*',
    'network.slug',
    'network.translations.title',
    'network.logo.id',
    'network.logo.title',
    'payments.payments_id.name',
    'type.name',
    'type.translations.title',
    'translations.*',
    'translations.pages.*',
    'translations.pages.author.name',
    'translations.pages.author.translations.title',
    'translations.pages.type.name',
    'translations.pages.type.translations.title',
    'devices.devices_id.name',
    'logo.id',
    'logo.title',
  ]
  const response = await directus.items('rooms').readByQuery({
    fields: selectFields.join(','),
    filter: {
      slug: {
        _eq: roomSlug,
      },
    },
    deep: {
      translations: {
        _filter: {
          languages_code: { _eq: directusLang[lang] },
          pages: { type: { name: { _eq: pageType } } },
        },
        // @ts-ignore
        pages: {
          author: {
            translations: {
              _filter: {
                languages_code: { _eq: directusLang[lang] },
              },
            },
          },
          type: {
            translations: {
              _filter: {
                languages_code: { _eq: directusLang[lang] },
              },
            },
          },
        },
      },
      accepted_countries: { _filter: { countries_id: { _eq: country } } },
      network: {
        // @ts-ignore
        translations: {
          _filter: {
            languages_code: { _eq: directusLang[lang] },
          },
        },
      },
    },
  })
  fs.writeFileSync(`${process.cwd()}/_log.response.json`, JSON.stringify(response, null, 2))
  const { data: roomsRaw } = response
  if (!Array.isArray(roomsRaw)) throw new Error('no data')
  if (roomsRaw.length !== 1) throw new Error('get more than 1 room')
  const roomRaw = roomsRaw[0]
  const { translations: translationsRaw, ...roomRawRest } = roomRaw
  if (!Array.isArray(translationsRaw)) throw new Error('bad translations')
  if (translationsRaw.length < 1) throw new Error('room is not localized')
  if (translationsRaw.length > 1) throw new Error('get more than 1 locale')
  const translationRaw = translationsRaw
  const translation = {}
  const roomRest = {}
  const room = { ...roomRest, ...translation }
  fs.writeFileSync(`${process.cwd()}/_log.room.json`, JSON.stringify(room, null, 2))

  // if (!Array.isArray(roomRaw.translations) || roomRaw.translations.length !== 1)
  //   throw new Error(err)
  // if (
  //   typeof roomRaw !== 'object' ||
  //   !Array.isArray(roomRaw.translations) ||
  //   roomRaw.translations.length !== 1
  // )
  //   throw new Error(err)

  // const [translationRaw] = roomRaw.translations
  // if (typeof translationRaw !== 'object') throw new Error(err)
  //
  // const { pages: pagesRaw } = translationRaw
  // const pages = pagesRaw?.map((pageRaw) => {
  //   if (typeof pageRaw !== 'object') throw new Error(err)
  //   const { author: authorRaw } = pageRaw
  //   if (!authorRaw) throw new Error(err)
  //   const author = {}
  //   return {
  //     ...pick(pageRaw, 'content'),
  //   }
  // })
  // const translation = omit(translationRaw, 'pages')
  // const room = { ...omit(roomRaw, 'translations'), ...translation }
  //
  // const page = {}
  // const documentMeta = {}
  // const roomData = { page }
  return { room }
}
