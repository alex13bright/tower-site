import { MetaFunction, LoaderFunction, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { Pagination, RoomType } from '~/api/apiTypes'
import { DynamicLinksFunction } from 'remix-utils'
import { getLocaleFromRequest } from '~/core/utils'
import { fetchRoomList } from '~/api/fetch'

export const meta: MetaFunction = () => {
  return {
    title: 'Room list',
    description: 'description of room list',
  }
}

const dynamicLinks: DynamicLinksFunction<LoaderData> = ({ data }) => {
  const { data: rooms } = data
  return rooms.map((room) => ({
    rel: 'stylesheet',
    href: `https://example.com/some/${room.attributes.name}.css`,
  }))
}

type LoaderData = {
  data: RoomType[]
  meta: {
    pagination: Pagination
  }
}
export const loader: LoaderFunction = async ({ request }) => {
  const locale = getLocaleFromRequest(request)
  const data = await fetchRoomList(locale)
  // if (rooms === null) throw new Error('cant get rooms');
  return json<LoaderData>(data)
}

export default function RoomsRoute() {
  const { data: rooms } = useLoaderData<LoaderData>()
  return (
    <div>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/rooms/${room.id}`}>{room.attributes.name}</Link>
            <p>{room.attributes.name}</p>
            <pre>{JSON.stringify(room.attributes, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const handle = {
  dynamicLinks,
}
