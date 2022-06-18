import { Room } from '~/components/room/Room'
import { json, LoaderFunction } from '@remix-run/node'
import { Device, Payment } from '~/core/types'

export type LinkType = {
  title: string
  url: string
  isActive?: boolean
}

type RatingsType = {
  reliability: number
  bonusesPromotions: number
  gameSelection: number
  casualPlayers: number
  softwareConvenience: number
  depositsWithdrawals: number
}

type NetworkType = {
  name: string
  title: string
  logo: string
}

type RoomType = {
  title: string
  bonus: string
  rakeback: string
  logo: string
  roomType: string
  license: string
  country: string
  payments: Payment[]
  network: NetworkType
  advantages: string[]
  ratings: RatingsType
  devices: Device[]
  navs: LinkType[]
}

const room: RoomType = {
  title: 'GG Poker',
  bonus: '100% до $600',
  rakeback: '60%',
  logo: '/fake/ggpoker-logo.svg',
  roomType: 'Licensed',
  license: 'United Kingdom',
  country: 'Thailand',
  payments: [
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
  ],
  advantages: [
    `World's largest poker room`,
    `Millionaire monthly promotions`,
    `Action across all stakes and games`,
    `WSOP Online partner`,
    `Unmatchable MTT grid`,
  ],
  network: {
    name: 'gg_network',
    title: 'GG Network',
    logo: '/fake/ico-gg-network.svg',
  },
  ratings: {
    reliability: 4.5,
    bonusesPromotions: 4.5,
    gameSelection: 4.5,
    casualPlayers: 4.5,
    softwareConvenience: 4.5,
    depositsWithdrawals: 4.5,
  },
  devices: ['IOS', 'macOS'],
  navs: [
    { url: '/rakeback-deals/ggpoker-review', title: 'Review' },
    { url: '/rakeback-deals/ggpoker-download', title: 'Download', isActive: true },
    { url: '/rakeback-deals/ggpoker-club', title: 'Club' },
    { url: '/rakeback-deals/ggpoker-forum', title: 'Forum' },
  ],
}

export type LoaderData = { room: RoomType }

export const loader: LoaderFunction = async () => {
  const data = { room }
  return json<LoaderData>(data)
}
export default function RoomRoute() {
  return <Room />
}
