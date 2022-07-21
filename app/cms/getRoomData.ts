import { getDirectusClient } from '~/cms/directus'
import { cmsPublic, directusLang, fakeUse } from '~/core/utils'
import { Country, Lang, PageType } from '~/core/types'
import { RoomType } from '~/core/types'
import { transformContent } from '~/dynamic-content/contentTransform'
import { extractToc } from '~/core/extractToc'
import { components } from '~/cms/schema'
import * as fs from 'fs'

type RoomPages = components['schemas']['ItemsRoomsRoomPageTypes']

const getActivePage = (rawActivePage: RoomPages, page: PageType) => {
  if (typeof rawActivePage !== 'object') throw new Error('bad page')

  const { toc_mode: tocMode, translations: rawTranslations } = rawActivePage

  if (
    !Array.isArray(rawTranslations) ||
    rawTranslations.length !== 1 ||
    typeof rawTranslations[0] !== 'object'
  )
    throw new Error('bad rawTranslations')
  const [translation] = rawTranslations

  const {
    content_meta_author: rawAuthor,
    content_meta_created_at: rawCreatedAt,
    content_meta_updated_at: rawUpdatedAt,
    document_meta_title: rawTitle,
    document_meta_description: rawDescription,
    h1: rawH1,
    content: rawContent,
  } = translation

  if (
    typeof rawAuthor !== 'object' ||
    rawAuthor === null ||
    !Array.isArray(rawAuthor.translations) ||
    typeof rawAuthor.translations[0] !== 'object' ||
    typeof rawAuthor.translations[0].title !== 'string'
  )
    throw new Error('bad rawAuthor')
  const author = rawAuthor.translations[0].title

  if (typeof rawCreatedAt !== 'string') throw new Error('bad rawCreated')
  const created = new Date(rawCreatedAt).toLocaleDateString()

  if (typeof rawUpdatedAt !== 'string') throw new Error('bad rawUpdated')
  const updated = new Date(rawUpdatedAt).toLocaleDateString()

  const title = typeof rawTitle === 'string' ? rawTitle : ''
  const description = typeof rawDescription === 'string' ? rawDescription : ''
  const h1 = typeof rawH1 === 'string' ? rawH1 : ''

  const rawContentString = typeof rawContent === 'string' ? rawContent : ''
  const content = transformContent(rawContentString)

  if (tocMode !== 'include_all_that_not_excluded' && tocMode !== 'exclude_all_that_not_included')
    throw new Error('bad tocMode')
  const toc = extractToc(rawContentString, tocMode)

  return {
    ...page,
    pageMeta: { title, description },
    contentMeta: { author, created, updated },
    h1,
    rawContent: rawContentString,
    content,
    toc,
  }
}

export const getRoomData = async (
  lang: Lang,
  country: Country,
  roomSlug: string,
  pageType: string
): Promise<RoomType> => {
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
    'pages.*',
    'pages.room_page_types_id.name',
    'pages.room_page_types_id.translations.*',
    'pages.translations.*',
    'pages.translations.content_meta_author.name',
    'pages.translations.content_meta_author.translations.*',
    'pages.translations.type.name',
    'pages.translations.type.translations.title',
    'devices.devices_id.name',
    'logo.id',
    'logo.title',
    'square_logo.id',
    'square_logo.title',
    'translations.*',
  ]
  const langFilter = {
    languages_code: { _eq: directusLang[lang] },
  }
  const translationsFilter = {
    translations: {
      _filter: langFilter,
    },
  }
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
      type: translationsFilter,
      pages: {
        translations: {
          _filter: langFilter,
          content_meta_author: translationsFilter,
        },
        room_page_types_id: translationsFilter,
      },
      translations: {
        _filter: langFilter,
      },
      accepted_countries: { _filter: { countries_id: { _eq: country } } },
      network: translationsFilter,
    },
  } as any)

  fs.writeFileSync(`${process.cwd()}/_log.response.json`, JSON.stringify(response, null, 2))

  const { data: rawRooms } = response
  if (!Array.isArray(rawRooms)) throw new Error('no data')
  if (rawRooms.length !== 1) throw new Error('get more than 1 room')
  const rawRoom = rawRooms[0]
  const {
    slug,
    network: rawNetwork,
    translations: rawTranslations,
    reliability: rawReliability,
    bonuses_promotions: rawBonusesPromotions,
    game_selection: rawGameSelection,
    casual_players: rawCasualPlayers,
    software_convenience: rawSoftwareConvenience,
    deposits_withdrawals: rawDepositsWithdrawals,
    license_country: licenseCountry,
    accepted_countries: rawAcceptedCountries,
    devices: rawDevices,
    payments: rawPayments,
    type: rawType,
    logo: rawLogo,
    square_logo: rawSquareLogo,
    pages: rawPages,
  } = rawRoom

  if (typeof rawNetwork !== 'object') throw new Error('bad rawNetwork')
  const {
    slug: networkSlug,
    logo: rawNetworkLogo,
    translations: rawNetworkTranslations,
  } = rawNetwork
  if (
    typeof networkSlug !== 'string' ||
    typeof rawNetworkLogo !== 'object' ||
    !Array.isArray(rawNetworkTranslations) ||
    rawNetworkTranslations.length !== 1 ||
    typeof rawNetworkTranslations[0] !== 'object' ||
    typeof rawNetworkTranslations[0].title !== 'string' ||
    typeof rawNetworkLogo.id !== 'string' ||
    typeof rawNetworkLogo.title !== 'string'
  )
    throw new Error('bad rawNetwork')
  const network = {
    url: `/online-poker-networks/${networkSlug}-review`,
    title: rawNetworkTranslations[0].title,
    logo: {
      url: `${cmsPublic}/${rawNetworkLogo.id}`,
      alt: rawNetworkLogo.title,
    },
  }

  if (!Array.isArray(rawAcceptedCountries)) throw new Error('bad rawAcceptedCountries')
  const isCountryAccepted = rawAcceptedCountries.length !== 0

  if (
    typeof rawType !== 'object' ||
    !Array.isArray(rawType.translations) ||
    rawType.translations.length !== 1 ||
    typeof rawType.translations[0] !== 'object' ||
    typeof rawType.translations[0].title !== 'string'
  )
    throw new Error('bad rawType')
  const roomType = rawType.translations[0].title

  if (
    typeof rawLogo !== 'object' ||
    typeof rawLogo.id !== 'string' ||
    typeof rawLogo.title !== 'string'
  )
    throw new Error('bad rawLogo')
  const logo = {
    url: `${cmsPublic}/${rawLogo.id}`,
    alt: rawLogo.title,
  }

  if (
    typeof rawSquareLogo !== 'object' ||
    typeof rawSquareLogo.id !== 'string' ||
    typeof rawSquareLogo.title !== 'string'
  )
    throw new Error('bad rawSquareLogo')
  const squareLogo = {
    url: `${cmsPublic}/${rawSquareLogo.id}`,
    alt: rawSquareLogo.title,
  }

  if (typeof slug !== 'string') throw new Error('bad slug')
  if (typeof licenseCountry !== 'string') throw new Error('bad licenseCountry')

  if (!Array.isArray(rawDevices)) throw new Error('bad rawDevices')
  const devices = rawDevices.map((rawDevice) => {
    if (
      typeof rawDevice !== 'object' ||
      typeof rawDevice.devices_id !== 'object' ||
      rawDevice.devices_id === null ||
      typeof rawDevice.devices_id.name !== 'string'
    )
      throw new Error('bad device')
    return rawDevice.devices_id.name
  })

  if (!Array.isArray(rawPayments)) throw new Error('bad rawDevices')
  const payments = rawPayments.map((rawPayment) => {
    if (
      typeof rawPayment !== 'object' ||
      typeof rawPayment.payments_id !== 'object' ||
      rawPayment.payments_id === null ||
      typeof rawPayment.payments_id.name !== 'string'
    )
      throw new Error('bad payment')
    return rawPayment.payments_id.name
  })

  if (!Array.isArray(rawTranslations)) throw new Error('bad rawTranslations')
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
  } = translationRaw

  if (typeof title !== 'string') throw new Error(`bad title`)
  if (typeof bonusCode !== 'string') throw new Error('bad bonusCode')
  if (typeof bonus !== 'string') throw new Error('bad bonus')
  if (typeof rakeback !== 'string') throw new Error('bad rakeback')
  if (typeof deposit !== 'string') throw new Error('bad deposit')
  if (typeof maxBonus !== 'string') throw new Error('bad deposit')

  if (typeof rawKeyFacts !== 'string') throw new Error('bad rawKeyFacts')
  const keyFacts = rawKeyFacts.split('\n')

  // type for decimals must be a number but directus returns string instead
  if (typeof rawReliability !== 'string') throw new Error('bad reliability')
  if (typeof rawBonusesPromotions !== 'string') throw new Error('bad bonusesPromotions')
  if (typeof rawGameSelection !== 'string') throw new Error('bad gameSelection')
  if (typeof rawCasualPlayers !== 'string') throw new Error('bad casualPlayers')
  if (typeof rawSoftwareConvenience !== 'string') throw new Error('bad softwareConvenience')
  if (typeof rawDepositsWithdrawals !== 'string') throw new Error('bad depositsWithdrawals')
  const reliability = parseFloat(rawReliability)
  const bonusesPromotions = parseFloat(rawBonusesPromotions)
  const gameSelection = parseFloat(rawGameSelection)
  const casualPlayers = parseFloat(rawGameSelection)
  const softwareConvenience = parseFloat(rawSoftwareConvenience)
  const depositsWithdrawals = parseFloat(rawDepositsWithdrawals)

  // pages
  if (!Array.isArray(rawPages)) throw new Error('bad rawPages')
  const pages = rawPages.map((page) => {
    if (typeof page !== 'object') throw new Error('bad page')
    const roomPageType = page.room_page_types_id

    if (
      typeof roomPageType !== 'object' ||
      roomPageType === null ||
      typeof roomPageType.name !== 'string' ||
      !Array.isArray(roomPageType.translations) ||
      typeof roomPageType.translations[0] !== 'object' ||
      typeof roomPageType.translations[0].title !== 'string'
    )
      throw new Error('bad rawType')
    const title = roomPageType.translations[0].title
    const type = roomPageType.name
    const url = `/rakeback-deals/${roomSlug}-${type}`

    return {
      type,
      title,
      url,
      isActive: type === pageType,
    }
  })

  // activePage
  const activePageIndex = pages.findIndex(({ isActive }) => isActive)
  if (activePageIndex === -1) throw new Error('bad pages')

  const rawActivePage = rawPages[activePageIndex]
  if (typeof rawActivePage !== 'object') throw new Error('bad pages')
  const activePage = getActivePage(rawActivePage, pages[activePageIndex])

  const room: RoomType = {
    slug,
    title,
    isCountryAccepted,
    roomType,
    licenseCountry,
    network,
    logo,
    squareLogo,
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
    devices,
    payments,
    pages,
    activePage,
  }

  fakeUse(room)
  // fs.writeFileSync(`${process.cwd()}/_log.room.json`, JSON.stringify(room, null, 2))

  return room
}
