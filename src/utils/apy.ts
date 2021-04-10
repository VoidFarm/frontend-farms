import BigNumber from 'bignumber.js'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK } from 'config'

/**
 * Get the APY value in %
 * @param stakingTokenPrice Token price in the same quote currency
 * @param rewardTokenPrice Token price in the same quote currency
 * @param totalStaked Total amount of stakingToken in the pool
 * @param tokenPerBlock Amount of new cake allocated to the pool for each new block
 * @returns Null if the APY is NaN or infinite.
 */
export const getPoolApy = (
  stakingTokenPrice: number,
  rewardTokenPrice: number,
  totalStaked: number,
  tokenPerBlock: number,
): number => {
  const totalRewardPricePerYear = new BigNumber(rewardTokenPrice).times(tokenPerBlock).times(BLOCKS_PER_YEAR)
  const totalStakingTokenInPool = new BigNumber(stakingTokenPrice).times(totalStaked).isEqualTo(0)? 1 : new BigNumber(stakingTokenPrice).times(totalStaked);
  const apy = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)

  console.log(stakingTokenPrice)
  console.log(totalStaked)

  return apy.isNaN() || !apy.isFinite() ? null : apy.toNumber()
}

/**
 * Get farm APY value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param cakePriceUsd Cake price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @returns
 */
export const getFarmApy = (poolWeight: BigNumber, cakePriceUsd: BigNumber, poolLiquidityUsd: BigNumber,voidPerBlock: number): number => {
  const yearlyCakeRewardAllocation = new BigNumber(voidPerBlock || 1).times(BLOCKS_PER_YEAR).times(poolWeight)
  const _poolLiquidityUsd= poolLiquidityUsd.isEqualTo(0) ? 1 : poolLiquidityUsd;
  const apy = yearlyCakeRewardAllocation.times(cakePriceUsd).times(100).div(new BigNumber(10).pow(18)).div(_poolLiquidityUsd)
  
  return apy.isNaN() || !apy.isFinite() ? null : apy.toNumber()
}

export default null
