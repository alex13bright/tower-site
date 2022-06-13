import styled, { css } from 'styled-components'
import { StickyMarker } from '~/components/Sticky'
import { backgroundDark, primaryDark } from '~/styles/styles'
import { Ratings } from '~/components/room/Ratings'
import { Network } from '~/components/room/Network'
import { Highlights } from '~/components/room/Highlights'
import { Actions } from '~/components/room/Actions'

const box = css`
  background-color: #9e76cc;
  border: 1px solid #c837ab;
`

const Main = styled.div`
  color: ${primaryDark};
  font-size: 16px;
  background: linear-gradient(0deg, ${backgroundDark.start}, ${backgroundDark.end} 67.71%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0 20px;

  display: grid;
  grid-template-rows: auto 140px 60px auto repeat(4, auto) 60px;
  place-items: center center;
`
const StyledRatings = styled(Ratings)`
  place-self: normal;
`
const StyledHighlights = styled(Highlights)`
  justify-self: normal;
`
const Features = styled.div`
  width: 100%;
  height: 200px;
  ${box};
`

const DetailedRatings = styled.div`
  width: 100%;
  height: 280px;
  ${box};
`
const Advantages = styled.div`
  width: 100%;
  height: 277px;
  ${box};
  border-top: 1px solid #343848;
`
const NavTabs = styled.div`
  width: 183px;
  height: 52px;
  ${box};
  place-self: end start;
`

export const Header = () => {
  return (
    <StickyMarker isVisibleKey="isMarkerVisible">
      <Main>
        <Network />
        <img alt="ggpoker-logo" src="/fake/ggpoker-logo.svg" width="210px" height="60px" />
        <StyledRatings ratings={4.3} />
        <StyledHighlights bonus="100% до $600" rakeback="60%" />
        <Actions />
        <Features />
        <Advantages />
        <DetailedRatings />
        <NavTabs />
      </Main>
    </StickyMarker>
  )
}
