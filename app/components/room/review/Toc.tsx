import { ReactElement, useEffect } from 'react'
import styled from 'styled-components'
import {
  accent,
  background,
  cancelSideMargins,
  contentTopPadding,
  expandOnParentSides,
  proximaNovaSb,
  pseudoAbsolute,
  secondary,
  secondaryDark,
  tertiary,
  widthAtLeast,
} from '~/styles/styles'
import { contentSidePaddingSizePx } from '~/components/page/pageStyles'
import { useToggle } from '~/custom-hooks/useToggle'
import { LoaderData } from '~/routes/rakeback-deals/$roomPageSlug'
import { useLoaderData } from '@remix-run/react'

const Anchor = styled.a`
  font-family: ${proximaNovaSb};
  font-size: 14px;
  font-style: normal;
  line-height: 18px;
`

const Item = styled.li<{ unmarked: boolean }>`
  padding: 0 0 15px 15px;
  position: relative;
  &::before {
    ${pseudoAbsolute};
    z-index: 2;
    border-radius: 50%;
    left: 0;
    top: 3px;
    width: 9px;
    height: 9px;
  }
  &::after {
    ${pseudoAbsolute};
    z-index: 1;
    height: 100%;
  }
  &:last-child {
    padding-bottom: 0;
    &::after {
      display: none;
    }
  }
`

const UnmarkedItem = styled(Item)`
  color: ${accent};
  &::before {
    background: #c4c4c4;
    border: 2px solid #fff;
  }
  &::after {
    background: ${tertiary};
    top: 5px;
    left: 4px;
    width: 1px;
  }
`
const MarkedItem = styled(Item)`
  color: ${secondaryDark};
  &::before {
    background: #fff;
    border: 2px solid #ccc;
  }
  &::after {
    background: #ccc;
    top: 5px;
    left: 3px;
    width: 3px;
  }
`

const List = styled.ul<{ isVisible: boolean }>`
  padding: 16px 0;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  @media screen and ${widthAtLeast.xm} {
    display: block;
  }
`

const TitleButton = styled.button<{ isPressed: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;

  color: #243238;
  font-size: 16px;
  font-weight: 700;

  @media screen and ${widthAtLeast.xm} {
    pointer-events: none;
  }

  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background: url(/images/main/arrow-down-dark.svg) no-repeat 50%;
    ${({ isPressed }) => (isPressed ? `transform: rotateX(180deg)` : '')};

    @media screen and ${widthAtLeast.xm} {
      display: none;
    }
  }
`
const Main = styled.nav`
  background: ${background};
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;

  display: grid;
  border-bottom: 1px solid ${secondary};
  //border-radius: 10px;
  //box-shadow: 0 5px 30px rgb(0 0 0 / 10%);

  ${expandOnParentSides(contentSidePaddingSizePx)};
  padding-top: 8px;
  padding-bottom: 8px;

  @media screen and ${widthAtLeast.md} {
    padding-top: 16px;
    padding-bottom: 16px;
    ${cancelSideMargins};
  }

  @media screen and ${widthAtLeast.xm} {
    border-bottom: none;
    grid-area: toc;
    top: ${contentTopPadding};
    height: min-content;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
  }
`

type Props = {
  className?: string
}

export function Toc({ className }: Props): ReactElement {
  const data = useLoaderData<LoaderData>()
  const { toc } = data.room.activePage
  const { isToggled: isUnfolded, toggle } = useToggle(false)

  useEffect(() => {
    const h2s = toc.map(({ id }) => document.getElementById(id))
  }, [])

  return (
    <Main className={className}>
      <TitleButton onClick={toggle} isPressed={isUnfolded}>
        Contents
      </TitleButton>
      <List isVisible={isUnfolded}>
        {toc.map(({ title, id }) => (
          <MarkedItem key={id} unmarked={false}>
            <Anchor href={'#' + id}>{title}</Anchor>
          </MarkedItem>
        ))}
      </List>
    </Main>
  )
}
