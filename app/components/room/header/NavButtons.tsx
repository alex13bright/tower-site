import { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { Link, useLoaderData } from '@remix-run/react'
import {
  accent,
  background,
  backgroundDark,
  proximaNovaSb,
  secondary,
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
    border-bottom: none;
    border-radius: 0;
  }
`
const firstCss = css`
  border-top-left-radius: 4px;
`
const lastCss = css`
  border-right: none;
  border-top-right-radius: 4px;
`
const StyledLink = styled(Link)<{ isFirst: boolean; isLast: boolean }>`
  ${itemStyles};
  font-weight: bold;
  color: ${backgroundDark.start};
  background-color: ${accent};
  &:hover {
    background-color: ${darken(accent, 0.1)};
  }

  @media screen and ${widthAtLeast.lg} {
    border: none;
    color: ${secondary};
    background: #f1efef;
    border-right: 1px solid ${tertiary};
    ${({ isFirst }) => isFirst && firstCss};
    ${({ isLast }) => isLast && lastCss};

    &:hover {
      background-color: #e9e9e9;
    }
  }
`

const ActiveLink = styled.span`
  ${itemStyles};
  color: ${accent};

  @media screen and ${widthAtLeast.lg} {
    background: ${background};

    border: 3px solid ${accent};
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    transform: scale(1.1) translateY(-2px);
    color: #243238;
    font-weight: bold;
  }
`

const Item = styled.li``

const List = styled.ul<{ length: number }>`
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr;

  @media screen and ${widthAtLeast.sm} {
    grid-template-columns: repeat(${({ length }) => (length == 3 ? 3 : 2)}, 1fr);
  }

  @media screen and ${widthAtLeast.md} {
    grid-template-columns: repeat(${({ length }) => length}, 1fr);
  }

  @media screen and ${widthAtLeast.lg} {
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
  const navsLength = navs.length
  return (
    <Main className={className}>
      <List length={navsLength}>
        {navs.map(({ url, title, isActive = false }, i) => (
          <Item key={i}>
            {isActive ? (
              <ActiveLink>{title}</ActiveLink>
            ) : (
              <StyledLink to={url} isFirst={i === 0} isLast={navsLength === i + 1}>
                {title}
              </StyledLink>
            )}
          </Item>
        ))}
      </List>
    </Main>
  )
}
