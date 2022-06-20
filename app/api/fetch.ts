import qs from 'qs'
import config from '~/config'
import { ApiListResponse, RoomType } from '~/api/types'
import { Locale } from '~/components/root/Locale'

const { apiEndPoint } = config

export const fetchRoomList = async (locale: Locale = 'en'): Promise<ApiListResponse<RoomType>> => {
  const query = qs.stringify(
    {
      locale,
      populate: '*',
    },
    {
      encode: false,
    }
  )
  const apiUrl = `${apiEndPoint}/rooms/?${query}`
  const apiResponse = await fetch(apiUrl)
  return (await apiResponse.json()) as ApiListResponse<RoomType>
  // if (!areRoomsValidate(rooms)) return null

  // const referralLinksQuery = qs.stringify(
  //   {
  //     locale,
  //     populate: {
  //       Main: {
  //         populate: '*',
  //       },
  //     },
  //     filters: {
  //       main: {
  //         room: {
  //           id: {
  //             $eq: 7,
  //           },
  //         },
  //       },
  //     },
  //   },
  //   {
  //     encode: false,
  //   },
  // );

  // return data;
}
