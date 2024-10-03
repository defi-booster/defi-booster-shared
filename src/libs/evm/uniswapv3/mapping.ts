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
  // Ethereum Sepolia
  11155111: {
    NONFUNGIBLE_POSITION_MANAGER_CONTRACT:
      "0x1238536071E1c677A632429e3655c799b22cDA52",
    POOL_FACTORY_CONTRACT: "0x0227628f3F023bb0B980b67D528571c95c6DaC1c",
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
