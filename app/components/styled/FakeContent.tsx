import styled from 'styled-components'
import { ReactElement, ReactNode } from 'react'

const Box = styled.div`
  //display: flex;
  //justify-content: center;
  //align-items: center;
  border: 1px solid #00aff0;
  margin: 5px;
`
type Props = {
  width?: string
  height?: string
  children?: ReactNode
}
export const FakeContent = ({ width, height, children }: Props): ReactElement => (
  <Box style={{ width, height }}>{children}</Box>
)
