import styled from 'styled-components'
import { ReactElement, ReactNode } from 'react'
import { breakpoints } from '~/styles/styleConfig.ts'

type KnownTags = keyof JSX.IntrinsicElements
type OuterBoxProps = { as?: KnownTags }
const OuterBox = styled.div.attrs<OuterBoxProps>(({ as }) => ({ as }))<OuterBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`
const InnerBox = styled.div`
  width: 100%;
  min-width: ${breakpoints.mobile};
  max-width: ${breakpoints.desktop};
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
