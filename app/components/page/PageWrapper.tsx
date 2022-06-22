import styled from 'styled-components'
import { ReactElement, ReactNode } from 'react'
import { breakpoints } from '~/styles/styles'

type KnownTags = keyof JSX.IntrinsicElements
const OuterBox = styled.div<{ as?: KnownTags }>`
  display: flex;
  justify-content: center;
`
const InnerBox = styled.div`
  width: 100%;
  min-width: ${breakpoints.xs}px;
  max-width: ${breakpoints.xl}px;
`
type Props = {
  as?: KnownTags
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
