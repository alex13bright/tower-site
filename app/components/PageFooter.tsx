import { ReactElement } from 'react'
import styled from 'styled-components'

const Box = styled.footer`
  height: 100px;
  color: #ccc;
  background-color: #2b2e3b;
  text-align: center;
`
type Props = {
  className?: string
}
export const PageFooter: (props: Props) => ReactElement = ({ className }) => (
  <Box className={className}>Page Footer</Box>
)
