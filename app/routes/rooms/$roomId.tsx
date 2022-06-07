import { useParams } from '@remix-run/react'

export default function RoomRoute() {
  const { roomId } = useParams()
  return <div>RoomId: {roomId}</div>
}
