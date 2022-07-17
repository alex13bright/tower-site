import styled from 'styled-components'
import { StickyMarker } from '~/components/page/StickyActions'
import {
  backgroundDark,
  cancelSideMargins,
  expandOnParentSides,
  primaryDark,
  widthAtLeast,
} from '~/styles/styles'
import { Ratings } from '~/components/room/header/Ratings'
import { Network } from '~/components/room/header/Network'
import { Highlights } from '~/components/room/header/Highlights'
import { Actions } from '~/components/room/header/Actions'
import { Logo } from '~/components/room/header/Logo'
import { ReactElement } from 'react'
import { Characteristics } from '~/components/room/header/Characteristics'
import { DetailedRatings } from '~/components/room/header/DetailedRatings'
import { KeyFacts } from '~/components/room/header/KeyFacts'
import { NavButtons } from '~/components/room/header/NavButtons'
import { contentSidePaddingSizePx } from '~/components/page/pageStyles'
import { sidePaddingSize } from '~/components/room/header/headerStyles'

const LogoHighlightsSpan = styled.div`
  display: contents;
  @media screen and ${widthAtLeast.lg} {
    grid-area: logo-highlights;
    display: flex;
    justify-content: start;
    gap: 20px;
    align-items: center;
  }
`
const Main = styled.div`
  ${expandOnParentSides(contentSidePaddingSizePx)};

  @media screen and ${widthAtLeast.md} {
    ${cancelSideMargins};
    padding-left: ${sidePaddingSize.md};
    padding-right: ${sidePaddingSize.md};
  }
  @media screen and ${widthAtLeast.xl} {
    padding-left: ${sidePaddingSize.lg};
    padding-right: ${sidePaddingSize.lg};
  }

  color: ${primaryDark};
  font-size: 16px;
  line-height: 20px;
  background: linear-gradient(0deg, ${backgroundDark.start}, ${backgroundDark.end} 67.71%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  display: grid;
  grid-template-areas:
    'network'
    'logo'
    'ratings'
    'highlights'
    'actions'
    'characteristics'
    'keyFacts'
    'detailed'
    'nav';
  grid-template-columns: 1fr;

  @media screen and ${widthAtLeast.md} {
    grid-template-areas:
      'network .'
      'logo ratings'
      'highlights highlights'
      'characteristics keyFacts'
      'actions actions'
      'detailed detailed'
      'nav nav';
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
  @media screen and ${widthAtLeast.lg} {
    grid-template-areas:
      'network . .'
      'logo-highlights logo-highlights ratings'
      'characteristics keyFacts detailed'
      'actions actions actions'
      'nav nav nav';
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
  }
`

type Props = { className?: string }

export const Header = ({ className }: Props): ReactElement => {
  return (
    <StickyMarker isVisibleKey="isMarkerVisible">
      <Main className={className}>
        <Network />
        <LogoHighlightsSpan>
          <Logo />
          <Highlights />
        </LogoHighlightsSpan>
        <Ratings />
        <Actions />
        <Characteristics />
        <KeyFacts />
        <DetailedRatings />
        <NavButtons />
      </Main>
    </StickyMarker>
  )
}
