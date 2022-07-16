import styled from 'styled-components'
import { ReactElement, ReactNode } from 'react'
import { breakpoints } from '~/styles/styles'
import { AsType } from '~/lib/types'
import { contentSidePaddingSize } from '~/components/page/pageStyles'

const xlPlusPaddings = `(min-width: ${breakpoints.xl + contentSidePaddingSize * 2}px)`
const OuterBox = styled.div<{ as?: AsType }>`
  display: grid;

  min-width: ${breakpoints.xs}px;
  @media screen and ${xlPlusPaddings} {
    grid-template-areas: '. content .';
    grid-template-columns: 1fr ${breakpoints.xl}px 1fr;
  }
`
const InnerBox = styled.div`
  max-width: ${breakpoints.xl}px;
  display: grid;
  @media screen and ${xlPlusPaddings} {
    grid-area: content;
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
