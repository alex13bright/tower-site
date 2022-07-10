import { Room } from '~/components/room/Room'
import { json, LoaderFunction } from '@remix-run/node'
import { roomData } from '~/api/fake-data/roomData'
import { RoomType } from '~/api/fake-data/dataTypes'
import { getDirectusClient } from '~/core/directus'
import * as fs from 'fs'
export type LoaderData = { room: RoomType }

export const loader: LoaderFunction = async () => {
  const directus = await getDirectusClient()
  const authors = await directus.items('authors').readByQuery({ meta: 'total_count' })

  fs.writeFileSync(`${process.cwd()}/_log.authors.json`, JSON.stringify(authors, null, 2))
  const data = { room: roomData }
  return json<LoaderData>(data)
}

export default function RoomRoute() {
  return <Room />
}
