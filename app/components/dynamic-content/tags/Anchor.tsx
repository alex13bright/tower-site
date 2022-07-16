import styled from 'styled-components'
import { Link } from '@remix-run/react'
import { accent } from '~/styles/styles'
import { ReactNode } from 'react'

const StyledA = styled(Link)`
  color: ${accent};
  text-decoration: underline;
  background-color: transparent;
`
type AnchorProps = {
  href: string
  target?: string
  children: ReactNode
  className?: string
}
export const Anchor = ({ children, className, href, ...props }: AnchorProps) => {
  // const isLocal =
  return (
    <StyledA className={className} to={href} {...props} forwardedAs="a">
      {children}
    </StyledA>
  )
}
Anchor.displayName = 'Anchor'
