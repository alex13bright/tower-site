import type { Locale } from '~/core/types';
import qs from 'qs';
import config from '~/config';
import type { Room } from '~/api/types/Room';

const { apiEndPoint } = config;

export const fetchRoomList = async (locale: Locale = 'en'): Promise<Room[] | null> => {
  const query = qs.stringify(
    {
      locale,
      populate: {
        main: {
          populate: '*',
        },
      },
    },
    {
      encode: false,
    },
  );
  const apiUrl = `${apiEndPoint}/rooms/?${query}`;
  const apiResponse = await fetch(apiUrl);
  const rooms = await apiResponse.json();

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

  return rooms;
};
