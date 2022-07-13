import fs from 'fs'
import { getDirectusClient } from '~/core/directus'
import { directusLang } from '~/core/utils'
import { Country, Lang } from '~/core/types'

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
      status: {
        _eq: 'published',
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

  const { data: rawRooms } = response
  if (!Array.isArray(rawRooms)) throw new Error('no data')
  if (rawRooms.length !== 1) throw new Error('get more than 1 room')
  const rawRoom = rawRooms[0]
  const {
    translations: rawTranslations,
    slug,
    reliability: rawReliability,
    bonuses_promotions: rawBonusesPromotions,
    game_selection: rawGameSelection,
    casual_players: rawCasualPlayers,
    software_convenience: rawSoftwareConvenience,
    deposits_withdrawals: rawDepositsWithdrawals,
    license_country: licenseCountry,
    devices: rawDevices,
    accepted_countries: rawAcceptedCountries,
    network: rawNetwork,
    payments: rawPayments,
    type: rawType,
    logo: rawLogo,
  } = rawRoom

  if (!Array.isArray(rawTranslations)) throw new Error('bad rawTranslations')
  if (!Array.isArray(rawDevices)) throw new Error('bad rawDevices')
  if (!Array.isArray(rawPayments)) throw new Error('bad rawPayments')
  if (!Array.isArray(rawAcceptedCountries)) throw new Error('bad rawAcceptedCountries')

  if (typeof rawNetwork !== 'object') throw new Error('bad rawNetwork')
  if (typeof rawType !== 'object') throw new Error('bad rawType')
  if (typeof rawLogo !== 'object') throw new Error('bad rawLogo')

  if (typeof slug !== 'string') throw new Error('bad slug')
  if (typeof licenseCountry !== 'string') throw new Error('bad licenseCountry')

  // for decimals must be number but directus return string instead
  if (typeof rawReliability !== 'string') throw new Error('bad reliability')
  if (typeof rawBonusesPromotions !== 'string') throw new Error('bad bonusesPromotions')
  if (typeof rawGameSelection !== 'string') throw new Error('bad gameSelection')
  if (typeof rawCasualPlayers !== 'string') throw new Error('bad casualPlayers')
  if (typeof rawSoftwareConvenience !== 'string') throw new Error('bad softwareConvenience')
  if (typeof rawDepositsWithdrawals !== 'string') throw new Error('bad depositsWithdrawals')

  if (rawTranslations.length < 1) throw new Error('room is not localized')
  if (rawTranslations.length > 1) throw new Error('get more than 1 locale')
  const translationRaw = rawTranslations[0]
  if (typeof translationRaw !== 'object') throw new Error('bad translation')

  const {
    title,
    rakeback,
    deposit,
    max_bonus: maxBonus,
    bonus_code: bonusCode,
    key_facts: rawKeyFacts,
    bonus,
    pages: rawPages,
  } = translationRaw

  if (typeof title !== 'string') throw new Error(`bad title`)
  if (typeof bonusCode !== 'string') throw new Error('bad bonusCode')
  if (typeof bonus !== 'string') throw new Error('bad bonus')
  if (typeof rakeback !== 'string') throw new Error('bad rakeback')
  if (typeof deposit !== 'string') throw new Error('bad deposit')
  if (typeof rawKeyFacts !== 'string') throw new Error('bad rawKeyFacts')
  if (!Array.isArray(rawPages)) throw new Error('bad rawPages')

  const keyFacts = rawKeyFacts.split('\n')

  const reliability = parseFloat(rawReliability)
  const bonusesPromotions = parseFloat(rawBonusesPromotions)
  const gameSelection = parseFloat(rawGameSelection)
  const casualPlayers = parseFloat(rawGameSelection)
  const softwareConvenience = parseFloat(rawSoftwareConvenience)
  const depositsWithdrawals = parseFloat(rawDepositsWithdrawals)

  const pages = rawPages.map((page, i) => {
    if (typeof page !== 'object') throw new Error('bad page')
    const {
      content,
      h1,
      meta_title: title,
      meta_description: description,
      author: rawAuthor,
      created: rawCreated,
      updated: rawUpdated,
      type: rawType,
    } = page

    if (typeof content !== 'string') throw new Error('bad content')
    if (typeof h1 !== 'string') throw new Error('bad h1')
    if (typeof title !== 'string') throw new Error('bad title')
    if (typeof description !== 'string') throw new Error('bad description')
    if (typeof rawCreated !== 'string') throw new Error('bad rawCreated')
    if (typeof rawUpdated !== 'string') throw new Error('bad rawUpdated')
    if (
      typeof rawAuthor !== 'object' ||
      !Array.isArray(rawAuthor.translations) ||
      typeof rawAuthor.translations[0] !== 'object' ||
      typeof rawAuthor.translations[0].title !== 'string'
    )
      throw new Error('bad rawAuthor')
    if (
      typeof rawType !== 'object' ||
      rawType === null ||
      typeof rawType.name !== 'string' ||
      !Array.isArray(rawType.translations) ||
      typeof rawType.translations[0] !== 'object' ||
      typeof rawType.translations[0].title !== 'string'
    )
      throw new Error('bad rawAuthor')

    const author = rawAuthor.translations[0].title
    const created = new Date(rawCreated).toLocaleDateString()
    const updated = new Date(rawCreated).toLocaleDateString()

    const roomType = rawType.translations[0].title
    const type = rawType.name
    const url = `/rakeback-deals/${roomSlug}-${type}`

    if (typeof rawType !== 'object') throw new Error('bad rawType')

    return {
      type,
      url,
      isActive: type === pageType,
      pageMeta: { title, description },
      contentMeta: { author, created, updated },
      roomType,
      h1,
      content,
    }
  })

  const activePage = pages.reduce<number | null>((activeIndex, { isActive }, i) => {
    return isActive ? i : activeIndex
  }, null)
  if (activePage === null) throw new Error('bad pageType')

  const room = {
    slug,
    title,
    keyFacts,
    bonusCode,
    bonus: { bonus, rakeback, deposit, maxBonus },
    ratings: {
      reliability,
      bonusesPromotions,
      gameSelection,
      casualPlayers,
      softwareConvenience,
      depositsWithdrawals,
    },
    pages,
    activePage,
  }

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
