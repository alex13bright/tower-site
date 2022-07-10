import qs from 'qs'
import config from '~/config'
import { Language, LocaleList } from '~/api/apiTypes'

const { apiEndPoint } = config

export const fetchLocaleList = async () => {
  const query = qs.stringify(
    {},
    {
      encode: false,
    }
  )

  const listLocales = await apiFetch<LocaleList>('i18n/locales', query)

  const defaultLocale: Language = listLocales.reduce(
    (defaultLocale: Language, { code, isDefault }) => (isDefault ? code : defaultLocale),
    'en'
  )
  const localeList: Language[] = listLocales.map(({ code }) => code)
  return { defaultLocale, localeList }
}

export const fetchRoomList = async (locale: Language = 'en') => {
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

export const fetchContent = async (locale: Language = 'en') => {
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
  try {
    const apiResponse = await fetch(apiUrl)
    const response = (await apiResponse.json()) as T
    // todo check for backend errors like:
    // response = {
    //   error: {
    //     status: 403,
    //     name: 'ForbiddenError',
    //     message: 'Forbidden',
    //     details: {},
    //   },
    // }
    // console.log(JSON.stringify(response, null, 2))
    return response
  } catch (error) {
    throw new Error('cms server connection error')
  }
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
