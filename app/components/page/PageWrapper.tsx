import styled from 'styled-components'
import { ReactElement, ReactNode } from 'react'
import { breakpoints } from '~/styles/styles'
import { AsType } from '~/lib/libTypes'

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
