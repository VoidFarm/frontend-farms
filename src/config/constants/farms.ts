import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'VOID-BNB LP',// PIANO
    lpAddresses: {
      56: '0xE7c5532f67C4d4D3CdE1120da1647a8968524de1',
      97: '',
    },
    token: tokens.piano,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'VOID-BUSD LP',// PIANO-BNB LP
    lpAddresses: {
      56: '0x7E824132742F57CEe7323af597C8DD15762113EE',
      97: '',
    },
    token: tokens.piano,
    quoteToken: tokens.busd,
  },
  {
    pid: 2,
    lpSymbol: 'VOID', // PIANO-BUSD LP
    isTokenOnly:true,
    lpAddresses: {
      56: '0x7E824132742F57CEe7323af597C8DD15762113EE',
      97: '',
    },
    token: tokens.piano,
    quoteToken: tokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'wBNB',
    isTokenOnly:true,
    lpAddresses: {
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      97: '',
    },
    token: tokens.wbnb,
    quoteToken: tokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD',
    isTokenOnly:true,
    lpAddresses: {
      56: '0x7E824132742F57CEe7323af597C8DD15762113EE',
      97: ''
    },
    token: tokens.busd,
    quoteToken: tokens.busd,
  },
  {
    pid: 5,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      97: ''
    },
    token: tokens.wbnb,
    quoteToken: tokens.busd,
  },
  // {
  //   pid: 6,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
  //     97: ''
  //   },
  //   token: tokens.cake,
  //   quoteToken: tokens.wbnb,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'PIANO-ADA LP',
  //   lpAddresses: {
  //     56: '0xfFeb22c6143B982699E2dcBafBb0EAC51d0F408E',
  //     97: ''
  //   },
  //   token: tokens.piano,
  //   quoteToken: tokens.ada,
  // },
  // {
  //   pid: 9,
  //   lpSymbol: 'PIANO-DOT LP',
  //   lpAddresses: {
  //     56: '0xe3905652c879d9df7319b5756350dd2bb5e052e9',
  //     97: ''
  //   },
  //   token: tokens.piano,
  //   quoteToken: tokens.dot,
  // },
  // {
  //   pid: 10,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
  //     97: ''
  //   },
  //   token: tokens.usdt,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 11,
  //   lpSymbol: 'DOT-ETH LP',
  //   lpAddresses: {
  //     56: '0x84cd882a0abaf8ad69b85fef0a8d5a36f5c0ecc1',
  //     97: ''
  //   },
  //   token: tokens.dot,
  //   quoteToken: tokens.eth,
  // },


]

export default farms
