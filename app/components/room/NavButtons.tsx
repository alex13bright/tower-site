import { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { headerBlock } from '~/components/room/roomStyles'
import { Link } from '@remix-run/react'
import { accent, backgroundDark, widthAtLeast } from '~/styles/styles'
import chroma from 'chroma-js'

const itemStyles = css`
  padding: 10px;
  border: 1px solid ${accent};
  border-radius: 4px;
  display: grid;
  place-content: center;
  text-align: center;
  height: 100%;
`

const ReLink = styled(Link)`
  ${itemStyles};
  font-weight: bold;
  color: ${backgroundDark.start};
  background-color: ${accent};
  &:hover {
    background-color: ${chroma(accent).darken(0.1).hex()};
  }
`

const NotLink = styled.span`
  ${itemStyles};
  color: ${accent};
`

const Item = styled.li``

const amountToColumns = (amount: number): number => {
  if (amount % 2 === 0) return 2
  if (amount > 4) return 1
  return amount
}

const List = styled.ul<{ amount: number }>`
  display: grid;
  padding: 5px;
  gap: 5px;
  @media ${widthAtLeast.sm} {
    grid-template-columns: repeat(${({ amount }) => amountToColumns(amount)}, 1fr);
  }
  @media ${widthAtLeast.md} {
    grid-template-columns: repeat(${({ amount }) => amount}, 1fr);
  }
`

const Main = styled.div`
  display: grid;
  margin-top: 30px;
  ${headerBlock};
  grid-area: nav;
`

export type LinkType = {
  title: string
  url: string
  isActive?: boolean
}

type Props = {
  links: LinkType[]
}
export function NavButtons({ links }: Props): ReactElement {
  return (
    <Main>
      <List amount={links.length}>
        {links.map(({ url, title, isActive = false }, i) => (
          <Item key={i}>
            {isActive ? <NotLink>{title}</NotLink> : <ReLink to={url}>{title}</ReLink>}
          </Item>
        ))}
      </List>
    </Main>
  )
}
