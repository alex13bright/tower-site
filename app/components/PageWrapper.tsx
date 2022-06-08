import styled from 'styled-components'
import { ReactElement, ReactNode } from 'react'

type KnownTags = keyof JSX.IntrinsicElements
type OuterBoxProps = { as?: KnownTags }
const OuterBox = styled.div.attrs<OuterBoxProps>(({ as }) => ({ as }))<OuterBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`
const InnerBox = styled.div`
  width: 100%;
  min-width: ${({ theme: { breakpoints } }) => breakpoints.mobile};
  max-width: ${({ theme: { breakpoints } }) => breakpoints.desktop};
`
type Props = {
  as?: KnownTags
  className?: string
  children?: ReactNode
}
export const PageWrapper: (props: Props) => ReactElement = ({ className, as, children }) => {
  return (
    <OuterBox className={className} as={as}>
      <InnerBox>{children}</InnerBox>
    </OuterBox>
  )
}
