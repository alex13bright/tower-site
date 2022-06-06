import { Link } from '@remix-run/react';
import styled from 'styled-components';

const Box = styled.div`
  border: 1px solid red;
`;

export default function Index() {
  return (
    <Box>
      <Link to={'/rooms'}>Rooms</Link>
    </Box>
  );
}
