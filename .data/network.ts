export const request = `http://localhost:1337/api/networks?populate[rooms][populate]=*`;

export const response = {
  data: [
    {
      id: 1,
      attributes: {
        name: 'network1',
        createdAt: '2022-06-03T05:21:18.542Z',
        updatedAt: '2022-06-03T05:21:23.476Z',
        publishedAt: '2022-06-03T05:21:23.472Z',
        locale: 'en',
        rooms: {
          data: [
            {
              id: 1,
              attributes: {
                name: 'room1',
                createdAt: '2022-06-03T05:22:34.300Z',
                updatedAt: '2022-06-03T07:06:17.888Z',
                publishedAt: '2022-06-03T05:22:35.689Z',
                locale: 'en',
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
                main: {
                  id: 2,
                },
                localizations: {
                  data: [],
                },
              },
            },
          ],
        },
      },
    },
    {
      id: 2,
      attributes: {
        name: 'network2',
        createdAt: '2022-06-03T05:22:20.857Z',
        updatedAt: '2022-06-03T05:22:22.065Z',
        publishedAt: '2022-06-03T05:22:22.063Z',
        locale: 'en',
        rooms: {
          data: [],
        },
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 2,
    },
  },
};
