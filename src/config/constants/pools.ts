import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.piano,
    earningToken: tokens.piano,
    contractAddress: {
      56: '0x7d0F5cF456E8E76e4f8F1A6F943583674554315c',
      97: ''
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.01',
    sortOrder: 1,
    isFinished: false,
  },
  // {
  //   sousId: 1,
  //   stakingToken: tokens.wbnb,
  //   earningToken: tokens.wbnb,
  //   contractAddress: {
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //     97: ''
  //   },
  //   poolCategory: PoolCategory.BINANCE,
  //   harvest: true,
  //   tokenPerBlock: '0.01',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
  // {
  //   sousId: 2,
  //   stakingToken: tokens.busd,
  //   earningToken: tokens.busd,
  //   contractAddress: {
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //     97: ''
  //   },
  //   poolCategory: PoolCategory.BINANCE,
  //   harvest: true,
  //   tokenPerBlock: '0.01',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
]

export default pools
