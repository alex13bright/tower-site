import { ReactElement } from 'react'
import styled from 'styled-components'
import { LoaderData } from '~/routes/rakeback-deals/$roomId'
import { useLoaderData } from '@remix-run/react'
import {
  accent,
  cancelSideMargins,
  expandOnParentSides,
  proximaNovaSb,
  pseudoAbsolute,
  secondaryDark,
  tertiary,
  widthAtLeast,
} from '~/styles/styles'
import { UtilityButton, Container, useSpoiler } from '~/components/ui/Spoiler'
import { contentSidePaddingSize } from '~/components/page/pageStyles'

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

const List = styled.ul`
  padding: 16px 0;
`

const StyledContainer = styled(Container)`
  @media screen and ${widthAtLeast.lg} {
    max-height: 100%;
  }
`
const Title = styled.div`
  color: #243238;
  font-size: 16px;
  line-height: 36px;
  font-style: normal;
  font-weight: bold;
`

const StyledButton = styled(UtilityButton)`
  background: url(/images/rest/arrow-down-dark.svg) no-repeat 50%;
  width: 20px;
  height: 20px;

  @media screen and ${widthAtLeast.lg} {
    display: none;
  }
`

const TitleButtonSpan = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  cursor: pointer;

  @media screen and ${widthAtLeast.lg} {
    pointer-events: none;
  }
`

const Main = styled.nav`
  border-radius: 10px;
  box-shadow: 0 5px 30px rgb(0 0 0 / 10%);

  ${expandOnParentSides(contentSidePaddingSize.xs)};
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 40px;

  @media screen and ${widthAtLeast.md} {
    ${cancelSideMargins};
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media screen and ${widthAtLeast.lg} {
    grid-area: toc;
    position: sticky;
    top: 0;
    left: 0;
  }
`

type Props = {
  className?: string
}

export function Toc({ className }: Props): ReactElement {
  const data: LoaderData = useLoaderData()
  const { toc } = data.room
  const { containerRef, maxHeight, isButtonHidden, isButtonPressed, toggle } = useSpoiler(0)

  return (
    <Main ref={containerRef} className={className}>
      <TitleButtonSpan onClick={toggle}>
        <Title>Contents</Title>
        <StyledButton isHidden={isButtonHidden} isPressed={isButtonPressed} />
      </TitleButtonSpan>
      <StyledContainer containerRef={containerRef} maxHeight={maxHeight}>
        <List>
          {toc.map(({ title, anchor }) => (
            <MarkedItem key={anchor} unmarked={false}>
              <Anchor href={'#' + anchor}>{title}</Anchor>
            </MarkedItem>
          ))}
        </List>
      </StyledContainer>
    </Main>
  )
}
