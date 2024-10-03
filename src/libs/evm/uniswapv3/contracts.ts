import { ethers } from "ethers";

import { computePoolAddress } from "@uniswap/v3-sdk";
import { Token } from "@uniswap/sdk-core";

import INONFUNGIBLE_POSITION_MANAGER from "@uniswap/v3-periphery/artifacts/contracts/interfaces/INonfungiblePositionManager.sol/INonfungiblePositionManager.json";
import IPOOL from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";

import { EUniswapV3ContractsNames } from "./enum";
import { mapping_idToContractsAddresses } from "./mapping";

export function getNonFungiblePositionManagerContract(
  provider: ethers.JsonRpcProvider,
  chainId: number
) {
  let nfpmAddress: string;
  try {
    nfpmAddress =
      // @ts-ignore
      mapping_idToContractsAddresses[chainId][
        EUniswapV3ContractsNames.NONFUNGIBLE_POSITION_MANAGER_CONTRACT
      ];
  } catch (error) {
    console.error(error);
    return;
  }

  return new ethers.Contract(
    nfpmAddress,
    INONFUNGIBLE_POSITION_MANAGER.abi,
    provider
  );
}

export function getPoolContract(
  provider: ethers.JsonRpcProvider,
  chainId: number,
  tokenIn: Token,
  tokenOut: Token,
  poolFee: number
) {
  let factoryAddress: string;
  try {
    factoryAddress =
      // @ts-ignore
      mapping_idToContractsAddresses[chainId][
        EUniswapV3ContractsNames.POOL_FACTORY_CONTRACT
      ];
  } catch (error) {
    console.error(error);
    return;
  }

  const poolAddress = computePoolAddress({
    factoryAddress: factoryAddress,
    tokenA: tokenIn,
    tokenB: tokenOut,
    fee: poolFee,
  });

  return new ethers.Contract(poolAddress, IPOOL.abi, provider);
}
