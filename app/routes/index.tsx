import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div>
      <Link to={'/rooms'}>Rooms</Link>
    </div>
  );
}
