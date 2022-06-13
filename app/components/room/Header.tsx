import styled, { css } from 'styled-components'
import { StickyMarker } from '~/components/Sticky'
import { backgroundDark, primaryDark } from '~/styles/styles'
import { Ratings } from '~/components/room/Ratings'
import { Network } from '~/components/room/Network'
import { Highlights } from '~/components/room/Highlights'

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

  display: grid;
  grid-template-rows: 55px repeat(2, 60px) auto repeat(4, auto) 60px;
  place-items: start center;
`
const StyledRatings = styled(Ratings)`
  align-self: center;
`
const StyledHighlights = styled(Highlights)`
  width: 100%;
  padding: 20px;
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
const Actions = styled.div`
  width: 100%;
  height: 181px;
  ${box};
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
        <StyledRatings ratings={2.3} />
        <StyledHighlights
          bonus="100% до $600 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam doloribus eaque earum, error in molestias? A amet assumenda autem commodi deleniti dolore ea error et eum ex harum id, mollitia numquam obcaecati omnis perferendis quidem tempora voluptas voluptatem, voluptatum? Culpa ex laboriosam molestias nam nulla possimus. Dignissimos, harum, tempora."
          rakeback="60%"
        />
        <Actions>Actions</Actions>
        <Features />
        <Advantages />
        <DetailedRatings />
        <NavTabs />
      </Main>
    </StickyMarker>
  )
}
