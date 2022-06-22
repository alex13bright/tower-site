import { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { Link, useLoaderData } from '@remix-run/react'
import {
  accent,
  backgroundDark,
  proximaNovaSb,
  sidePaddings,
  tertiary,
  widthAtLeast,
} from '~/styles/styles'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { darken } from '~/core/utils'
import { sidePaddingSize } from '~/components/room/header/headerStyles'

const itemStyles = css`
  padding: 10px;
  border: 1px solid ${accent};
  border-radius: 4px;
  display: grid;
  place-content: center;
  text-align: center;
  height: 100%;

  @media screen and ${widthAtLeast.lg} {
    ${sidePaddings(sidePaddingSize.lg)};
    font-family: ${proximaNovaSb};
    font-size: 16px;
    letter-spacing: -0.1px;
    line-height: 20px;
    mix-blend-mode: normal;
    padding: 16px 28px;
    white-space: nowrap;
  }
`

const StyledLink = styled(Link)`
  ${itemStyles};
  font-weight: bold;
  color: ${backgroundDark.start};
  background-color: ${accent};
  &:hover {
    background-color: ${darken(accent, 0.1)};
  }

  @media screen and ${widthAtLeast.lg} {
    border: none;
    border-radius: 0;
    border-right: 1px solid ${tertiary};

    background: #f1efef;
  }
`

const ActiveLink = styled.span`
  ${itemStyles};
  color: ${accent};
`

const Item = styled.li`
  @media screen and ${widthAtLeast.lg} {
    &:last-child {
      border-top-right-radius: 20px;
    }
  }
`

const amountToColumns = (amount: number): number => {
  if (amount % 2 === 0) return 2
  if (amount > 4) return 1
  return amount
}

const List = styled.ul<{ amount: number }>`
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr;

  @media screen and ${widthAtLeast.sm} {
    grid-template-columns: repeat(${({ amount }) => amountToColumns(amount)}, 1fr);
  }

  @media screen and ${widthAtLeast.md} {
    grid-template-columns: repeat(${({ amount }) => amount}, 1fr);
  }

  @media screen and ${widthAtLeast.lg} {
    overflow-x: auto;
    display: flex;
    justify-items: start;
    gap: 0;
  }
`

const Main = styled.div`
  grid-area: nav;
  display: grid;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and ${widthAtLeast.lg} {
    margin-bottom: 0;
  }
`

type Props = {
  className?: string
}
export function NavButtons({ className }: Props): ReactElement {
  const data: LoaderData = useLoaderData()
  const { navs } = data.room
  return (
    <Main className={className}>
      <List amount={navs.length}>
        {navs.map(({ url, title, isActive = false }, i) => (
          <Item key={i}>
            {isActive ? (
              <ActiveLink>{title}</ActiveLink>
            ) : (
              <StyledLink to={url}>{title}</StyledLink>
            )}
          </Item>
        ))}
      </List>
    </Main>
  )
}
