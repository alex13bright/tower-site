import styled from 'styled-components';

const Box = styled.div`
  background-color: red;
`;

type Props = {};
type Component = (props: Props) => JSX.Element;
export const SomeComponent: Component = (props: Props) => <Box>Header</Box>;
