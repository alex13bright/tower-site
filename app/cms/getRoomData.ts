import { getDirectusClient } from '~/cms/directus'
import { cmsPublic, directusLang } from '~/core/utils'
import { Country, Lang } from '~/core/types'
import { RoomType } from '~/core/types'
import * as fs from 'fs'
import { transformContent } from '~/core/contentTransfs'

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
    'translations.*',
    'translations.pages.*',
    'translations.pages.author.name',
    'translations.pages.author.translations.title',
    'translations.pages.type.name',
    'translations.pages.type.translations.title',
    'devices.devices_id.name',
    'logo.id',
    'logo.title',
    'square_logo.id',
    'square_logo.title',
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
      // @ts-ignore
      type: translationsFilter,
      translations: {
        _filter: {
          ...langFilter,
          pages: { type: { name: { _eq: pageType } } },
        },
        // @ts-ignore
        pages: {
          author: translationsFilter,
          type: translationsFilter,
        },
      },
      accepted_countries: { _filter: { countries_id: { _eq: country } } },
      // @ts-ignore
      network: translationsFilter,
    },
  })

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

  // for decimals must be number but directus return string instead
  if (typeof rawReliability !== 'string') throw new Error('bad reliability')
  if (typeof rawBonusesPromotions !== 'string') throw new Error('bad bonusesPromotions')
  if (typeof rawGameSelection !== 'string') throw new Error('bad gameSelection')
  if (typeof rawCasualPlayers !== 'string') throw new Error('bad casualPlayers')
  if (typeof rawSoftwareConvenience !== 'string') throw new Error('bad softwareConvenience')
  if (typeof rawDepositsWithdrawals !== 'string') throw new Error('bad depositsWithdrawals')

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
    pages: rawPages,
  } = translationRaw

  if (typeof title !== 'string') throw new Error(`bad title`)
  if (typeof bonusCode !== 'string') throw new Error('bad bonusCode')
  if (typeof bonus !== 'string') throw new Error('bad bonus')
  if (typeof rakeback !== 'string') throw new Error('bad rakeback')
  if (typeof deposit !== 'string') throw new Error('bad deposit')
  if (typeof maxBonus !== 'string') throw new Error('bad deposit')
  if (typeof rawKeyFacts !== 'string') throw new Error('bad rawKeyFacts')
  if (!Array.isArray(rawPages)) throw new Error('bad rawPages')

  const keyFacts = rawKeyFacts.split('\n')

  const reliability = parseFloat(rawReliability)
  const bonusesPromotions = parseFloat(rawBonusesPromotions)
  const gameSelection = parseFloat(rawGameSelection)
  const casualPlayers = parseFloat(rawGameSelection)
  const softwareConvenience = parseFloat(rawSoftwareConvenience)
  const depositsWithdrawals = parseFloat(rawDepositsWithdrawals)

  const pages = rawPages.map((page) => {
    if (typeof page !== 'object') throw new Error('bad page')
    const {
      content: rawContent,
      h1,
      meta_title: metaTitle,
      meta_description: metaDescription,
      author: rawAuthor,
      created: rawCreated,
      updated: rawUpdated,
      type: rawType,
    } = page

    if (typeof rawContent !== 'string') throw new Error('bad content')
    if (typeof h1 !== 'string') throw new Error('bad h1')
    if (typeof metaTitle !== 'string') throw new Error('bad title')
    if (typeof metaDescription !== 'string') throw new Error('bad description')
    if (typeof rawCreated !== 'string') throw new Error('bad rawCreated')
    if (typeof rawUpdated !== 'string') throw new Error('bad rawUpdated')
    if (
      typeof rawAuthor !== 'object' ||
      !Array.isArray(rawAuthor.translations) ||
      typeof rawAuthor.translations[0] !== 'object' ||
      typeof rawAuthor.translations[0].title !== 'string'
    )
      throw new Error('bad rawAuthor')

    const author = rawAuthor.translations[0].title
    const created = new Date(rawCreated).toLocaleDateString()
    const updated = new Date(rawCreated).toLocaleDateString()

    if (
      typeof rawType !== 'object' ||
      rawType === null ||
      typeof rawType.name !== 'string' ||
      !Array.isArray(rawType.translations) ||
      typeof rawType.translations[0] !== 'object' ||
      typeof rawType.translations[0].title !== 'string'
    )
      throw new Error('bad rawAuthor')
    const title = rawType.translations[0].title
    const type = rawType.name
    const url = `/rakeback-deals/${roomSlug}-${type}`

    if (typeof rawType !== 'object') throw new Error('bad rawType')

    return {
      type,
      title,
      url,
      isActive: type === pageType,
      pageMeta: { title: metaTitle, description: metaDescription },
      contentMeta: { author, created, updated },
      roomType,
      h1,
      rawContent,
      content: '',
    }
  })

  const activePage = pages.reduce<number | null>((activeIndex, { isActive }, i) => {
    return isActive ? i : activeIndex
  }, null)

  if (activePage === null) throw new Error('bad pageType')

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
  pages[activePage].content = transformContent(pages[activePage].rawContent)

  fs.writeFileSync(`${process.cwd()}/_log.room.json`, JSON.stringify(room, null, 2))

  return room
}
