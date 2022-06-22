import { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

const Main = styled.div`
  color: #222;
  font-size: 32px;
  font-weight: bold;
  line-height: 36px;
  margin-bottom: 16px;
`

type Props = {
  children: ReactNode
  className?: string
}
export const Level1Header = ({ children, className }: Props): ReactElement => {
  return <Main className={className}>{children}</Main>
}
