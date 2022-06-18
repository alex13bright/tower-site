import { RoomType } from '~/core/types'

export const roomData: RoomType = {
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
    { url: '/rakeback-deals/ggpoker-review', title: 'Review_' },
    { url: '/rakeback-deals/ggpoker-download', title: 'Download_' },
    { url: '/rakeback-deals/ggpoker-club', title: 'Club_' },
    { url: '/rakeback-deals/ggpoker-forum', title: 'Forum_' },
  ],
  toc: [
    {
      anchor: `About GGPoker`,
      title: `About_GGPoker`,
    },
    {
      anchor: `Bonuses and promotions`,
      title: `Bonuses_and`,
    },
    {
      anchor: `GGpoker rakeback`,
      title: `GGpoker_rakeback`,
    },
    {
      anchor: `Rake structure`,
      title: `Rake_structure`,
    },
    {
      anchor: `Games and traffic`,
      title: `Games_and`,
    },
    {
      anchor: `Game softness`,
      title: `Game_softness`,
    },
    {
      anchor: `Attitude towards PRO players`,
      title: `Attitude_towards`,
    },
    {
      anchor: `Software review`,
      title: `Software_review`,
    },
    {
      anchor: `Reliability and trustworthiness`,
      title: `Reliability_and`,
    },
    {
      anchor: `Deposits and withdrawals`,
      title: `Deposits_and`,
    },
    {
      anchor: `Pros and cons to play at GG Poker`,
      title: `Pros_and`,
    },
    {
      anchor: `Advantages of our affiliate service`,
      title: `Advantages_of`,
    },
    {
      anchor: `FAQ`,
      title: `FAQ_`,
    },
  ],
}
