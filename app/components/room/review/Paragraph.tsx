import { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

const Main = styled.p``

type Props = {
  children: ReactNode
  className?: string
}

export const Paragraph = ({ children, className }: Props): ReactElement => {
  return <Main className={className}>{children}</Main>
}
