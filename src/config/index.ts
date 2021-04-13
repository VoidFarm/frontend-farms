import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 3
export const CAKE_PER_BLOCK = new BigNumber(1)
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const BASE_URL = 'https://void.farm/'
export const BASE_EXCHANGE_URL = 'https://exchange.pancakeswap.finance/'
export const BASE_ADD_LIQUIDITY_URL = `https://exchange.pancakeswap.finance/#/swap`
export const BASE_LIQUIDITY_POOL_URL = `https://exchange.pancakeswap.finance/#/pool`
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
