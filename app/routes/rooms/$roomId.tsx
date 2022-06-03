import { useParams } from 'react-router';

export default function RoomRoute() {
  const { roomId } = useParams();
  return <div>RoomId: {roomId}</div>;
}
