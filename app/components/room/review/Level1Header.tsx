import { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

const Main = styled.div``

type Props = {
  children: ReactNode
  className?: string
}
export const Level1Header = ({ children, className }: Props): ReactElement => {
  return <Main className={className}>{children}</Main>
}
