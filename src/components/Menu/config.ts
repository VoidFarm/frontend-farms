import { MenuEntry } from 'voidfarm-toolkit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms (coming soon..)',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools (coming soon..)',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: "Medium",
    icon: "MediumIcon",
    href: "https://voidfarm.medium.com/",
  },
  {
    label: "Github",
    icon: "GithubIcon",
    href: "https://github.com/voidfarm",
  },
  {
    label: "Docs",
    icon: "TicketIcon",
    href: "https://voidfarm.gitbook.io/void-farm/",
  },
  {
    label: 'Audit (coming soon..)',
    icon: 'AuditIcon',
    href: '',
  },
]

export default config
