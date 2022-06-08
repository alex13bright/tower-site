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
export const FakeContent: (props: Props) => ReactElement = ({ width, height, children }) => (
  <Box style={{ width, height }}>{children}</Box>
)
