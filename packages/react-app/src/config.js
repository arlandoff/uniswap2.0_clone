import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = 
"0x047Baff62A92011195a36B73E3Ec04dC5A0C6f29"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/TCAu9F7AWBGtjYEDoGTy70IbThioIPoT",
  },
};