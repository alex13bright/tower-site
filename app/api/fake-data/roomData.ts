import { RoomType } from '~/api/fake-data/dataTypes'

export const roomData: RoomType = {
  title: 'GG Poker',

  bonusTitle: '100% до $600',
  rakeback: '60%',
  deposit: '+100%',
  maxBonus: '$600',
  logo: '/fake/ggpoker-logo.svg',
  squareLogo: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="none"><path d="M200 0H0v200h200V0z" fill="#000"/><path d="M88.12 82.168c0-2.837.276-5.599.778-8.286H68.735L56.457 89.776h19.51s.627.025 1.28.126c3.641.427 6.504 3.54 6.504 7.281 0 3.717-2.788 6.805-6.504 7.257H65.672c-12.53 0-22.698-9.818-22.698-22.347 0-1.657.175-3.264.527-4.846.251-1.105 1.23-4.695 3.189-7.759 3.967-6.202 11.023-10.219 18.932-10.219h13.057s0-.025.025-.025h9.29l12.303-16.22H64.894C43.45 42.997 26 60.498 26 82.017c0 21.518 17.45 39.019 38.919 39.019H91.283c4.495 0 8.135-3.566 8.135-8.06v-1.406c-7.03-7.834-11.299-18.154-11.299-29.403z" fill="#fff"/><path d="M157.822 59.195L170.1 43H132.663c-12.957 0-24.431 6.378-31.512 16.195h56.671z" fill="#CD181F"/><path d="M159.077 73.909h-23.276l-12.278 15.894h20.213s.627.025 1.28.126c3.641.426 6.503 3.54 6.503 7.281 0 3.716-2.787 6.805-6.503 7.257h-11.575c-12.529 0-22.699-9.818-22.699-22.347 0-1.658.176-3.264.528-4.846.125-.628.502-2.01 1.13-3.641H94.698a38.72 38.72 0 0 0-.904 8.411c0 21.519 17.451 39.02 38.919 39.02H159.077c4.495 0 8.135-3.566 8.135-8.06v-30.91c0-4.494-3.64-8.185-8.135-8.185zm-43.606 75.133c1.221 2.26 2.936 3.169 5.17 3.195 3.195.026 6.417.026 9.612.052h1.923c0 1.507-.026 2.962-.026 4.495-.364.026-.727.078-1.117.078-3.507 0-7.015-.026-10.522-.052-5.482-.052-9.872-4.131-10.106-9.301-.26-5.638 3.637-10.236 9.301-10.574 4.13-.234 8.287 0 12.548.026 0 1.507-.026 2.936-.026 4.572h-2.416c-3.066-.026-6.157-.052-9.223-.052-2.156 0-3.793.91-5.066 2.962l16.679.078c0 1.585-.026 3.014-.026 4.651-5.482-.052-10.99-.078-16.705-.13zm35.281 2.704c2.598 1.793 4.91 3.377 7.248 4.988a3.273 3.273 0 0 0-.078.26c-2.052 0-4.105 0-6.157-.052-.312 0-.624-.286-.883-.494-2.624-1.818-5.222-3.663-7.846-5.507-.702-.494-1.325-1.014-1.04-2.001.286-1.039 1.118-1.195 2.053-1.169 1.948.026 3.897.052 5.845.026 2.079 0 3.534-1.377 3.56-3.325.025-2.001-1.429-3.404-3.56-3.404-3.559-.026-7.092-.052-10.781-.052l-.078 15.796c-1.455 0-2.754-.026-4.157-.026.026-6.573.078-13.12.104-19.745.286-.026.571-.103.883-.103 4.728.025 9.431 0 14.159.077 5.742.104 9.197 5.612 6.729 10.678-1.013 2.079-2.624 3.378-4.936 3.819-.286.026-.546.104-1.065.234zm-102.595-.623c0-1.325.026-2.52.026-3.845 3.04.026 6.002.052 8.963.026 2.754-.026 4.417-2.884 2.936-5.119-.494-.701-1.455-1.48-2.234-1.506-3.845-.182-7.69-.104-11.665-.13l-.078 15.821c-1.43 0-2.702-.025-4.105-.025.026-6.599.078-13.172.104-19.927h2.364c4.235.026 8.47 0 12.73.078 5.95.13 9.379 6.287 6.34 11.327-1.196 2.001-2.962 3.248-5.275 3.326-3.325.129-6.65 0-10.106-.026zm18.342-4.159c.052-6.132 4.988-10.99 11.12-10.964 6.13.026 11.015 4.988 10.989 11.119-.052 6.106-5.014 11.016-11.12 10.99A11.06 11.06 0 0 1 66.5 146.964zm18.16.104c0-3.871-3.247-7.119-7.118-7.119-3.897.026-7.119 3.274-7.093 7.144.026 3.82 3.222 7.015 7.04 7.041 3.872.026 7.171-3.221 7.171-7.066z" fill="#fff"/><path d="M112.38 156.682c-1.793 0-3.612 0-5.404-.052-.338 0-.728-.26-1.013-.494a1202.93 1202.93 0 0 1-8.911-7.352c-1.455-1.221-1.507-3.04-.026-4.261 2.987-2.494 6.027-4.91 9.067-7.326.285-.234.701-.39 1.039-.416 1.766-.026 3.533 0 5.3 0 .104.13.233.286.337.416-.311.13-.649.208-.909.415-3.195 2.572-6.391 5.17-9.56 7.768-1.274 1.04-1.274 1.481-.026 2.52 3.377 2.832 6.754 5.638 10.132 8.47 0 .104-.026.208-.026.312zm-17.537-.054c-1.35 0-2.65-.025-4-.025.025-6.625.077-13.224.103-19.849 1.351 0 2.65.026 4.001.026-.026 6.651-.052 13.224-.104 19.848z" fill="#fff"/></svg>`,
  bonusCode: 'WPDEALS',
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
    { url: '/rakeback-deals/ggpoker-review', title: 'Review', isActive: true },
    { url: '/rakeback-deals/ggpoker-download', title: 'Download' },
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
  pageMeta: {
    author: 'Rodion Longa',
    created: '09.10.2017',
    updated: '02.02.2022',
  },
}
