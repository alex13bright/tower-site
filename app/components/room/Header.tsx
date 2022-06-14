import styled from 'styled-components'
import { StickyMarker } from '~/components/Sticky'
import { backgroundDark, primaryDark } from '~/styles/styles'
import { Ratings } from '~/components/room/Ratings'
import { Network } from '~/components/room/Network'
import { Highlights } from '~/components/room/Highlights'
import { Actions } from '~/components/room/Actions'
import { Logo } from '~/components/room/Logo'
import { ReactElement } from 'react'

const Main = styled.div`
  color: ${primaryDark};
  font-size: 16px;
  background: linear-gradient(0deg, ${backgroundDark.start}, ${backgroundDark.end} 67.71%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0 26px;

  display: grid;
  grid-template-areas:
    '. network .'
    '. logo .'
    '. ratings .'
    'highlights highlights highlights'
    'actions actions actions';
  grid-template-columns: 24px 1fr 24px;
  grid-template-rows: auto 140px 60px repeat(2, auto);
`

const GridNetwork = styled(Network)`
  justify-self: center;
`

const GridLogo = styled(Logo)`
  place-self: center;
`

const GridAction = styled(Actions)`
  margin: 30px 0;
`
type Props = { className?: string }

export const Header = ({ className }: Props): ReactElement => {
  return (
    <StickyMarker isVisibleKey="isMarkerVisible">
      <Main className={className}>
        <GridNetwork />
        <GridLogo />
        <Ratings ratings={4.3} />
        <Highlights bonus="100% до $600" rakeback="60%" />
        <GridAction />
        {/*<Features />*/}
        {/*<Advantages />*/}
        {/*<DetailedRatings />*/}
        {/*<NavTabs />*/}
      </Main>
    </StickyMarker>
  )
}
