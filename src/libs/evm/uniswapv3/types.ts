// general info about pool associated with this position - source of data: UniswapV3Pool
export interface UNISWAP_V3_IPool {
  tickSpacing: bigint;
  liquidity: bigint;
  sqrtPriceX96: bigint;
  tick: bigint;
  feeGrowthGlobalX128_0: bigint;
  feeGrowthGlobalX128_1: bigint;
  tickUpperFeeGrowthOutsideX128_0: bigint;
  tickUpperFeeGrowthOutsideX128_1: bigint;
  tickLowerFeeGrowthOutsideX128_0: bigint;
  tickLowerFeeGrowthOutsideX128_1: bigint;
}

// position specific info - source of data: NonfungiblePositionManager
export interface UNISWAP_V3_IPosition {
  token0Address: string;
  token1Address: string;
  token0Symbol: string;
  token1Symbol: string;
  token0Decimals: number;
  token1Decimals: number;
  fee: number;
  tickLower: bigint;
  tickUpper: bigint;
  liquidity: bigint;
  feeGrowthInsideLastX128_0: bigint;
  feeGrowthInsideLastX128_1: bigint;
  tokensOwed0: bigint;
  tokensOwed1: bigint;
}

export type UNISWAP_V3_TPools = {
  [poolKey: string]: UNISWAP_V3_IPool;
};

export type UNISWAP_V3_TPositions = {
  [tokenId: string]: UNISWAP_V3_IPosition;
};

// data from scanning Transfer event on NonfungiblePositionManager contract from adress 0x0 to wallet
export interface UNISWAP_V3_ILivecycleRecord {
  livecycleEvent: string;
  blockNumber: number;
  date: string;
  tokenId: bigint;
  amount0: bigint;
  amount1: bigint;
  feePaid: bigint;
}

// data calculated from position metrics
export interface UNISWAP_V3_ICalc {
  amount0WhenHold: bigint;
  amount1WhenHold: bigint;
}
