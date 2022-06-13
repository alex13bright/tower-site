import styled, { css } from 'styled-components'
import { StickyMarker } from '~/components/Sticky'
import { color50, color51, secondaryDark } from '~/styles/styles'

const box = css`
  background-color: #9e76cc;
  border: 1px solid #c837ab;
`

const Layout = styled.div`
  display: grid;
  grid-template-rows: 40px repeat(3, 60px) repeat(4, auto) 60px;
  background: linear-gradient(0deg, ${color50}, ${color51} 67.71%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  place-items: start center;
`
const NetworkBox = styled.div`
  border: 1px solid #343848;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 0;
  padding: 8px 10px;
`
const NetworkImage = styled.img``
const NetworkTitle = styled.span`
  color: ${secondaryDark};
  font-size: 10px;
`
const Network = () => (
  <NetworkBox>
    <NetworkImage alt="gg-network" src="/fake/ico-gg-network.svg" width="20px" height="20px" />
    <NetworkTitle>GG Network</NetworkTitle>
  </NetworkBox>
)
const Logo = styled.div`
  width: 210px;
  height: 60px;
  ${box};
`
const Features = styled.div`
  width: 100%;
  height: 200px;
  ${box};
`
const Highlights = styled.div`
  width: 100%;
  height: 60px;
  ${box};
`
const Ratings = styled.div`
  width: 191px;
  height: 26px;
  ${box};
  align-self: center;
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
      <Layout>
        <Network />
        <Logo />
        <Ratings />
        <Highlights />
        <Actions>Actions</Actions>
        <Features />
        <Advantages />
        <DetailedRatings />
        <NavTabs />
      </Layout>
    </StickyMarker>
  )
}
