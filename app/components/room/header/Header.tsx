import styled from 'styled-components'
import { StickyMarker } from '~/components/page/StickyActions'
import { backgroundDark, primaryDark, widthAtLeast } from '~/styles/styles'
import { Ratings } from '~/components/room/header/Ratings'
import { Network } from '~/components/room/header/Network'
import { Highlights } from '~/components/room/header/Highlights'
import { Actions } from '~/components/room/header/Actions'
import { Logo } from '~/components/room/header/Logo'
import { ReactElement } from 'react'
import { Features } from '~/components/room/header/Features'
import { DetailedRatings } from '~/components/room/header/DetailedRatings'
import { Advantages } from '~/components/room/header/Advantages'
import { NavButtons } from '~/components/room/header/NavButtons'

const LogoHighlightsSpan = styled.div`
  display: contents;
  @media ${widthAtLeast.lg} {
    grid-area: logo-highlights;
    display: flex;
    justify-content: start;
    gap: 20px;
    align-items: center;
  }
`
const Main = styled.div`
  color: ${primaryDark};
  font-size: 16px;
  line-height: 20px;
  background: linear-gradient(0deg, ${backgroundDark.start}, ${backgroundDark.end} 67.71%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 30px;

  display: grid;
  grid-template-areas:
    'network'
    'logo'
    'ratings'
    'highlights'
    'actions'
    'features'
    'advantages'
    'detailed'
    'nav';
  grid-template-columns: 1fr;

  @media ${widthAtLeast.md} {
    grid-template-areas:
      'network .'
      'logo ratings'
      'highlights highlights'
      'features advantages'
      'actions actions'
      'detailed detailed'
      'nav nav';
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
  @media ${widthAtLeast.lg} {
    grid-template-areas:
      'network . .'
      'logo-highlights logo-highlights ratings'
      'features advantages detailed'
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
        <Features />
        <Advantages />
        <DetailedRatings />
        <NavButtons />
      </Main>
    </StickyMarker>
  )
}
