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
    { url: '/rakeback-deals/ggpoker-review', title: 'Review' },
    { url: '/rakeback-deals/ggpoker-download', title: 'Download', isActive: true },
    { url: '/rakeback-deals/ggpoker-club', title: 'Club' },
    { url: '/rakeback-deals/ggpoker-forum', title: 'Forum' },
  ],
  toc: [
    {
      title: `About GGPoker`,
      anchor: `about_ggpoker`,
    },
    {
      title: `Bonuses and promotions`,
      anchor: `bonuses_and_promotions`,
    },
    {
      title: `GGpoker rakeback`,
      anchor: `ggpoker_rakeback`,
    },
    {
      title: `Rake structure`,
      anchor: `rake_structure`,
    },
    {
      title: `Games and traffic`,
      anchor: `games_and_traffic`,
    },
    {
      title: `Game softness`,
      anchor: `game_softness`,
    },
    {
      title: `Attitude towards PRO players`,
      anchor: `attitude_towards_pro players`,
    },
    {
      title: `Software review`,
      anchor: `software_review`,
    },
    {
      title: `Reliability and trustworthiness`,
      anchor: `reliability_and_trustworthiness`,
    },
    {
      title: `Deposits and withdrawals`,
      anchor: `deposits_and_withdrawals`,
    },
    {
      title: `Pros and cons to play at GG Poker`,
      anchor: `pros_and_cons_to_play_at_gg poker`,
    },
    {
      title: `Advantages of our affiliate service`,
      anchor: `advantages_of_our_affiliate service`,
    },
    {
      title: `FAQ`,
      anchor: `FAQ`,
    },
  ],
}
