import { getDirectusClient } from '~/core/directus'
import { directusLang } from '~/core/utils'
import fs from 'fs'
import { Country, Lang } from '~/core/types'

// todo: why this function does not narrow type?
const isObject = (value: any): boolean => typeof value === 'object' && value !== null

const squeeze = <T>(value: T[]): null | T =>
  Array.isArray(value) && value.length === 1 ? value[0] : null

const squeezeToObject = <T>(value: T[]) => {
  const squeezed = squeeze(value)
  if (!isObject(squeezed)) throw new Error('error')
  return squeezed
}

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
    limit: 1,
    fields: selectFields.join(','),
    filter: {
      // @ts-ignore
      slug: {
        _eq: roomSlug,
      },
    },
    deep: {
      accepted_countries: { _filter: { countries_id: { _eq: country } } },
      network: {
        // @ts-ignore
        translations: {
          _filter: {
            languages_code: { _eq: directusLang[lang] },
          },
        },
      },
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
    },
  })
  fs.writeFileSync(`${process.cwd()}/_log.response.json`, JSON.stringify(response, null, 2))
  const { data: roomsRaw } = response
  if (typeof roomsRaw !== 'object' || roomsRaw === null) throw new Error('error')

  const roomRaw = squeezeToObject(roomsRaw)

  const { translations, ...roomRest } = roomRaw

  const translationRaw = squeeze(roomRaw.translations)
  if (typeof translationRaw !== 'object') throw new Error('error')

  const {} = translationRaw
  const translation = {}
  const room = { ...roomRest, ...translation }
  if (!Array.isArray(roomRaw.translations) || roomRaw.translations.length !== 1)
    throw new Error(err)
  if (
    typeof roomRaw !== 'object' ||
    !Array.isArray(roomRaw.translations) ||
    roomRaw.translations.length !== 1
  )
    throw new Error(err)

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
