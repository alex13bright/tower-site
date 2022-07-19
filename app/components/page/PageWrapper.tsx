import styled from 'styled-components'
import { ReactElement, ReactNode } from 'react'
import { breakpoints, widthAtLeast } from '~/styles/styles'
import { AsType } from '~/lib/types'

const OuterBox = styled.div<{ as?: AsType }>`
  display: grid;

  min-width: ${breakpoints.xs}px;
  @media screen and ${widthAtLeast.xl} {
    grid-template-areas: '. page-wrapper-content .';
    grid-template-columns: 1fr minmax(auto, ${breakpoints.xl}px) 1fr;
  }
`
const InnerBox = styled.div`
  display: grid;

  @media screen and ${widthAtLeast.xl} {
    grid-area: page-wrapper-content;
  }
`

type Props = {
  forwardAs?: AsType
  className?: string
  children?: ReactNode
}

export const PageWrapper = ({ className, forwardAs, children }: Props): ReactElement => {
  return (
    <OuterBox className={className} as={forwardAs}>
      <InnerBox>{children}</InnerBox>
    </OuterBox>
  )
}
