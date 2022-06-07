import { ReactElement } from 'react'
import styled from 'styled-components'

const Box = styled.header`
  height: 100px;
  color: #ccc;
  background-color: #2b2e3b;
  text-align: center;
`
export type Props = {
  className?: string
}
export const PageHeader: (props: Props) => ReactElement = ({ className }) => (
  <Box className={className}>Page Header</Box>
)
