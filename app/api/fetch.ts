import qs from 'qs'
import config from '~/config'
import { ApiListResponse, RoomType } from '~/api/apiTypes'
import { Locale } from '~/components/root/Locale'

const { apiEndPoint } = config

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
      },
    },
    {
      encode: false,
    }
  )

  return apiFetch('contents', query)
}

export const apiFetch = async (
  entity: string,
  query: string = ''
): Promise<ApiListResponse<RoomType>> => {
  const apiUrl = `${apiEndPoint}/${entity}/?${query}`
  // console.log(apiUrl)
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
