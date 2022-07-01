import qs from 'qs'
import config from '~/config'
import { ApiListResponse, RoomType } from '~/api/apiTypes'
import { Locale, allLocales } from '~/components/root/Locale'

const { apiEndPoint } = config

export const fetchLocaleList = async () => {
  const query = qs.stringify(
    {},
    {
      encode: false,
    }
  )
  const b = {
    default: 'en',
    locales: ['ru', 'es'],
  }
  const a = {
    en: { isDefault: true },
    ru: { isDefault: false },
    es: { isDefault: false },
  }

  const listLocales = await apiFetch('i18n/locales', query)
  const defaultLocale = listLocales.reduce(
    (defaultLocale, { code, isDefault }) => (isDefault ? code : defaultLocale),
    'en'
  )
  const localeList = listLocales.map(({ code }) => code) as Locale[]
  return { defaultLocale, localeList }
}

export const fetchRoomList = async (locale: Locale = 'en') => {
  const query = qs.stringify(
    {
      locale,
      populate: '*',
    },
    {
      encode: false,
    }
  )
  return apiFetch('rooms', query)
}

export const fetchContent = async (locale: Locale = 'en') => {
  const query = qs.stringify(
    {
      locale,
      populate: {
        images: {
          populate: '*',
        },
        pages: {
          populate: '*',
        },
      },
    },
    {
      encode: false,
    }
  )

  return apiFetch('rooms', query)
}

export const apiFetch = async (
  entity: string,
  query: string = ''
): Promise<ApiListResponse<RoomType>> => {
  const queryPart = query === '' ? '' : '?' + query
  const apiUrl = `${apiEndPoint}/${entity}${queryPart}`
  console.log(apiUrl)
  const apiResponse = await fetch(apiUrl)
  return (await apiResponse.json()) as ApiListResponse<RoomType>
}

// fetchContent('en').then((d) => {})

/*
filters: {
  main: {
    room: {
      id: {
        $eq: 7,
      },
    },
  },
},
*/
