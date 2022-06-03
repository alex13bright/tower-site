import qs from 'qs';

export const request = `http://localhost:1337/api/referral-links/?locale=en&populate[Main][populate]=*`;
export const query = qs.stringify(
  {
    populate: {
      Main: {
        populate: '*',
      },
    },
  },
  {
    encode: false,
  },
);

export const response = {
  data: [
    {
      id: 1,
      attributes: {
        createdAt: '2022-06-03T16:58:53.516Z',
        updatedAt: '2022-06-03T16:59:46.765Z',
        publishedAt: '2022-06-03T16:58:54.811Z',
        link: 'Link1room1USA',
        Main: {
          id: 2,
          room: {
            data: {
              id: 7,
              attributes: {
                name: 'Room1',
                createdAt: '2022-06-03T16:26:10.334Z',
                updatedAt: '2022-06-03T16:43:17.804Z',
                publishedAt: '2022-06-03T16:26:11.539Z',
                locale: 'en',
              },
            },
          },
          country: {
            data: {
              id: 1,
              attributes: {
                name: 'USA',
                createdAt: '2022-06-03T11:40:30.883Z',
                updatedAt: '2022-06-03T12:37:13.821Z',
                publishedAt: '2022-06-03T11:40:36.899Z',
                locale: 'en',
              },
            },
          },
        },
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 1,
    },
  },
};
