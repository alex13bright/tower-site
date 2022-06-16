import styled, { css } from 'styled-components'
import { StickyMarker } from '~/components/Sticky'
import { backgroundDark, primaryDark } from '~/styles/styles'
import { Ratings } from '~/components/room/Ratings'
import { Network } from '~/components/room/Network'
import { Highlights } from '~/components/room/Highlights'
import { Actions } from '~/components/room/Actions'
import { Logo } from '~/components/room/Logo'
import { ReactElement } from 'react'
import { Features } from '~/components/room/Features'
import { DetailedRatings } from '~/components/room/DetailedRatings'
import { Device, Payment } from '~/core/types'

export const headerBlock = css`
  padding: 0 24px;
`

const Main = styled.div`
  color: ${primaryDark};
  font-size: 16px;
  line-height: 20px;
  background: linear-gradient(0deg, ${backgroundDark.start}, ${backgroundDark.end} 67.71%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, auto);
  row-gap: 20px;
`

const GridNetwork = styled(Network)`
  align-self: start;
  justify-self: center;
  ${headerBlock};
`

const GridLogo = styled(Logo)`
  place-self: center;
  ${headerBlock};
`
const GridRatings = styled(Ratings)`
  ${headerBlock};
`
const GridHighlights = styled(Highlights)`
  ${headerBlock};
`

const GridAction = styled(Actions)`
  margin: 30px 0;
  ${headerBlock};
`

const GridFeatures = styled(Features)`
  ${headerBlock};
`
const GridDetailedRatings = styled(DetailedRatings)`
  ${headerBlock};
`

type Props = { className?: string }

export const Header = ({ className }: Props): ReactElement => {
  const ratings = 4.3
  const bonus = '100% до $600'
  const rakeback = '60%'
  const networkTitle = 'GG Network'
  const networkLogo = '/fake/ico-gg-network.svg'
  const logo = '/fake/ggpoker-logo.svg'
  const roomType = 'Licensed'
  const license = 'United Kingdom'
  const payments: Payment[] = [
    'visa',
    'skrill',
    'yandex-money',
    'astropay',
    'american-express',
    'ecopayz',
    'cashfree',
    'bangkok-bank',
    'paypal',
    'webmoney',
  ]
  const detailedRatings = {
    reliability: 4.5,
    bonusesPromotions: 4.5,
    gameSelection: 4.5,
    casualPlayers: 4.5,
    softwareConvenience: 4.5,
    depositsWithdrawals: 4.5,
  }
  const devices: Device[] = ['IOS', 'macOS']
  const country = 'Thailand'
  return (
    <StickyMarker isVisibleKey="isMarkerVisible">
      <Main className={className}>
        <GridNetwork title={networkTitle} logo={networkLogo} />
        <GridLogo title={networkTitle} logo={logo} />
        <GridRatings ratings={ratings} />
        <GridHighlights bonus={bonus} rakeback={rakeback} />
        <GridAction />
        <GridFeatures data={{ roomType, license, payments, devices, country }} />
        {/*<Advantages />*/}
        <GridDetailedRatings data={detailedRatings} />
        {/*<NavTabs />*/}
      </Main>
    </StickyMarker>
  )
}
