import { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { headerBlock } from '~/components/room/styles'
import { Link } from '@remix-run/react'
import { accent } from '~/styles/styles'

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
  background-color: ${accent};
`

const NotLink = styled.span`
  ${itemStyles};
`
const Item = styled.li``

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5px;
  gap: 5px;
`

const Main = styled.div`
  display: grid;
  ${headerBlock};
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
      <List>
        {links.map(({ url, title, isActive = false }, i) => (
          <Item key={i}>
            {isActive ? <NotLink>{title}</NotLink> : <ReLink to={url}>{title}</ReLink>}
          </Item>
        ))}
      </List>
    </Main>
  )
}
