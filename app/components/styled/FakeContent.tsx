import styled from 'styled-components'
import { ReactElement, ReactNode } from 'react'

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
type Props = {
  width?: number
  height?: number
  children?: ReactNode
}
export const FakeContent = ({ width, height, children }: Props): ReactElement => (
  <Box style={{ width, height }}>{children}</Box>
)
