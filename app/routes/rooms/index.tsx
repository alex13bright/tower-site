import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import qs from 'qs';
import config from '~/config';
import type { Room } from '~/api-types/Room';
import type { Pagination } from '~/api-types/meta';

const { apiEndPoint } = config;

type LoaderData = {
  data: Room[];
  meta: {
    pagination: Pagination;
  };
};
export const loader: LoaderFunction = async () => {
  const query = qs.stringify(
    {
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
  console.log('apiUrl: ', apiUrl);
  const apiResponse = await fetch(apiUrl);
  const rooms = await apiResponse.json();
  return json<LoaderData>(rooms);
};

export default function RoomsRoute() {
  const loaderData = useLoaderData<LoaderData>();
  const {
    data: rooms,
    meta: { pagination },
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
