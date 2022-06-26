import styled from 'styled-components'
import { ReactElement, ReactNode } from 'react'
import { breakpoints } from '~/styles/styles'
import { AsType } from '~/core/types'

const OuterBox = styled.div<{ as?: AsType }>`
  display: flex;
  justify-content: center;
`
const InnerBox = styled.div`
  display: grid;
  min-width: ${breakpoints.xs}px;
  max-width: ${breakpoints.xl}px;
`
type Props = {
  as?: AsType
  className?: string
  children?: ReactNode
}

export const PageWrapper = ({ className, as, children }: Props): ReactElement => {
  return (
    <OuterBox className={className} as={as}>
      <InnerBox>{children}</InnerBox>
    </OuterBox>
  )
}
