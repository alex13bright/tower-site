export const request = `http://localhost:1337/api/rooms/?populate[main][populate]=*`

export const response = {
  data: [
    {
      id: 1,
      attributes: {
        name: 'room1',
        createdAt: '2022-06-03T05:22:34.300Z',
        updatedAt: '2022-06-03T07:06:17.888Z',
        publishedAt: '2022-06-03T05:22:35.689Z',
        locale: 'en',
        main: {
          id: 2,
          network: {
            data: {
              id: 1,
              attributes: {
                name: 'network1',
                createdAt: '2022-06-03T05:21:18.542Z',
                updatedAt: '2022-06-03T05:21:23.476Z',
                publishedAt: '2022-06-03T05:21:23.472Z',
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
}
