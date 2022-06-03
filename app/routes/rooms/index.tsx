import type { MetaFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import qs from 'qs';
import config from '~/config';
import type { Room } from '~/api-types/Room';
import type { Pagination } from '~/api-types/meta';
import type { DynamicLinksFunction } from 'remix-utils';
import { getLocaleFromRequest } from '~/core/utils';

export const meta: MetaFunction = () => {
  return {
    title: 'Room list',
    description: 'description of room list',
  };
};

const dynamicLinks: DynamicLinksFunction<LoaderData> = ({ data }) => {
  const { data: rooms } = data;
  console.log(data);
  return rooms.map(room => ({
    rel: 'stylesheet',
    href: `https://example.com/some/${room.attributes.name}.css`,
  }));
};

const { apiEndPoint } = config;

type LoaderData = {
  data: Room[];
  meta: {
    pagination: Pagination;
  };
};
export const loader: LoaderFunction = async ({ request }) => {
  const locale = getLocaleFromRequest(request);
  const query = qs.stringify(
    {
      locale,
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
  const apiUrl = `${apiEndPoint}/rooms/?${query}`;
  const apiResponse = await fetch(apiUrl);
  const rooms = await apiResponse.json();

  // const referralLinksQuery = qs.stringify(
  //   {
  //     locale,
  //     populate: {
  //       Main: {
  //         populate: '*',
  //       },
  //     },
  //     filters: {
  //       Main: {
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

  return json<LoaderData>(rooms);
};

export default function RoomsRoute() {
  const loaderData = useLoaderData<LoaderData>();
  const {
    data: rooms,
    // meta: { pagination },
  } = loaderData;
  return (
    <div>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            <Link to={`/rooms/${room.id}`}>{room.attributes.name}</Link>
            <p>{room.attributes.name}</p>
            <pre>{JSON.stringify(room.attributes, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const handle = {
  dynamicLinks,
};
