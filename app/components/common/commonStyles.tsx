import styled from 'styled-components'
import { Link } from '@remix-run/react'
import { accent } from '~/styles/styles'
import { ReactElement, ReactNode } from 'react'

export const H1 = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
`

export const H2 = styled.h2`
  font-size: 24px;
  scroll-margin-top: 130px;
  position: relative;
  padding-top: 12px;
  margin: 40px 0 20px;

  &::before {
    background: url('/images/rest/h2-line.svg') no-repeat 50%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 42px;
    height: 2px;
  }
`

const StyledP = styled.p`
  color: inherit;
  background: inherit;
`

type PProps = {
  children: ReactNode
  className?: string
}

export const P = ({ children, className }: PProps): ReactElement => {
  return <StyledP className={className}>{children}</StyledP>
}

export const ContentLink = styled(Link)`
  color: ${accent};
  text-decoration: underline;
  background-color: transparent;
`

export const UL = styled.ul`
  list-style-position: outside;
  list-style-type: none;
  margin: 0 0 40px;
  padding: 0;
`

export const LI = styled.li`
  color: inherit;
  background: inherit;
  font-size: 17px;
  line-height: 21px;
  margin-bottom: 15px;
  padding-left: 25px;
  position: relative;

  &::before {
    background: url('/images/rest/list-item.svg') no-repeat 50%;
    content: '';
    position: absolute;
    top: 7px;
    left: 5px;
    display: block;
    width: 10px;
    height: 9px;
  }
`
