import { Room } from '~/components/room/Room'
import { json, LoaderFunction } from '@remix-run/node'
import { roomData } from '~/fake-data/roomFakeData'
import { RoomType } from '~/core/types'
export type LoaderData = { room: RoomType }

export const loader: LoaderFunction = async () => {
  const data = { room: roomData }
  return json<LoaderData>(data)
}
export default function RoomRoute() {
  return <Room />
}
