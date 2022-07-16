import styled from 'styled-components'
import { ReactElement } from 'react'

const StyledLI = styled.li`
  color: inherit;
  background: inherit;
  font-size: 17px;
  line-height: 21px;
  margin-bottom: 15px;
  padding-left: 25px;
  position: relative;

  &::before {
    background: url('/assets/list-item.svg') no-repeat 50%;
    content: '';
    position: absolute;
    top: 6px;
    left: 5px;
    display: block;
    width: 10px;
    height: 9px;
  }
`

const StyledUL = styled.ul`
  list-style-position: outside;
  list-style-type: none;
  margin: 0 0 40px;
  padding: 0;
`

type UnorderedListData = string[]
const parseChildren = (children: ReactElement[]): UnorderedListData => {
  return children.filter(({ type }) => type === 'li').map((liData) => liData.props.children)
}

type UnorderedListProps = {
  children: ReactElement[]
  className?: string
}

export const UnorderedList = ({ children, className }: UnorderedListProps) => {
  const listData = parseChildren(children)
  return (
    <StyledUL className={className}>
      {listData.map((liData, i) => (
        <StyledLI key={i}>{liData}</StyledLI>
      ))}
    </StyledUL>
  )
}
UnorderedList.displayName = 'UnorderedList'
