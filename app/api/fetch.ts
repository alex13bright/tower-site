import qs from 'qs'
import config from '~/config'
import { Locale, LocaleList } from '~/api/apiTypes'

const { apiEndPoint } = config

export const fetchLocaleList = async () => {
  const query = qs.stringify(
    {},
    {
      encode: false,
    }
  )

  const listLocales = await apiFetch<LocaleList>('i18n/locales', query)
  const defaultLocale: Locale = listLocales.reduce(
    (defaultLocale: Locale, { code, isDefault }) => (isDefault ? code : defaultLocale),
    'en'
  )
  const localeList: Locale[] = listLocales.map(({ code }) => code)
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

export const apiFetch = async <T>(entity: string, query: string): Promise<T> => {
  const queryPart = query ? '?' + query : ''
  const apiUrl = `${apiEndPoint}/${entity}${queryPart}`
  const apiResponse = await fetch(apiUrl)
  return (await apiResponse.json()) as T
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
