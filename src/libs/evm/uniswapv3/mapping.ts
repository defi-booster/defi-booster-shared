import { EUniswapV3SupportedChains } from "./enum";

export const mapping_idToContractsAddresses = {
  // Ethereum mainnet
  1: {
    NONFUNGIBLE_POSITION_MANAGER_CONTRACT:
      "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
    POOL_FACTORY_CONTRACT: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
  },
  // Localhost/local fork
  31337: {
    NONFUNGIBLE_POSITION_MANAGER_CONTRACT:
      "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
    POOL_FACTORY_CONTRACT: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
  },
  // Base
  8453: {
    NONFUNGIBLE_POSITION_MANAGER_CONTRACT:
      "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1",
    POOL_FACTORY_CONTRACT: "0x33128a8fC17869897dcE68Ed026d694621f6FDfD",
  },
};

export const mapping_idToNonfungiblePostionManagerContractCreationBlock = {
  1: 12369651, // Ethereum mainnet
  31337: 12369651, // local fork
  8453: 1371714, // Base
};

export const mapping_idToChain = {
  1: EUniswapV3SupportedChains.Ethereum,
  8453: EUniswapV3SupportedChains.Base,
  31337: EUniswapV3SupportedChains.Localhost,
};

export const mapping_chainIdToScanURL = {
  1: `https://api.etherscan.io/api`,
  8453: `https://api.basescan.org/api`,
};

export const mapping_chainIdToUSDCContract = {
  1: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  8453: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
};

export const mapping_chainIdToWETHContract = {
  1: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  8453: "0x4200000000000000000000000000000000000006",
};
