import styled from 'styled-components'
import { StickyMarker } from '~/components/Sticky'
import { backgroundDark, primaryDark, widthAtLeast } from '~/styles/styles'
import { Ratings } from '~/components/room/Ratings'
import { Network } from '~/components/room/Network'
import { Highlights } from '~/components/room/Highlights'
import { Actions } from '~/components/room/Actions'
import { Logo } from '~/components/room/Logo'
import { ReactElement } from 'react'
import { Features } from '~/components/room/Features'
import { DetailedRatings } from '~/components/room/DetailedRatings'
import { Device, Payment } from '~/core/types'
import { Advantages } from '~/components/room/Advantages'
import { LinkType, NavButtons } from '~/components/room/NavButtons'

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
`

type Props = { className?: string }

export const Header = ({ className }: Props): ReactElement => {
  const ratings = 4.3
  const bonus = '100% до $600'
  const rakeback = '60%'
  const network = {
    name: 'gg_network',
    title: 'GG Network',
    logo: '/fake/ico-gg-network.svg',
  }
  const title = 'GG Poker'
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
  const advantages = [
    `World's largest poker room`,
    `Millionaire monthly promotions`,
    `Action across all stakes and games`,
    `WSOP Online partner`,
    `Unmatchable MTT grid`,
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
  const navLinks: LinkType[] = [
    { url: '/rakeback-deals/ggpoker-review', title: 'Review' },
    { url: '/rakeback-deals/ggpoker-download', title: 'Download', isActive: true },
    { url: '/rakeback-deals/ggpoker-club', title: 'Club' },
    { url: '/rakeback-deals/ggpoker-forum', title: 'Forum' },
  ]
  return (
    <StickyMarker isVisibleKey="isMarkerVisible">
      <Main className={className}>
        <Network {...network} />
        <Logo title={title} logo={logo} />
        <Highlights bonus={bonus} rakeback={rakeback} />
        <Ratings ratings={ratings} />
        <Actions />
        <Features data={{ roomType, license, payments, devices, country }} />
        <Advantages data={advantages} />
        <DetailedRatings data={detailedRatings} />
        <NavButtons links={navLinks} />
      </Main>
    </StickyMarker>
  )
}
