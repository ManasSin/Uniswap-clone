import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x33f4e69583eFbe9B1fE89fB16b6f35818c9e09c2";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/j4g96EBh6cn4CAZrYpMlWnncaWWrdjW4",
  },
};
