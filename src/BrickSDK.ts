import { CONFIG_PROVIDER } from "./configs";

const { BrickSDK } = require('@brickglobal/brick-sdk');
export let brickSDKv2: any
export const brickSDK_v2 = async (apiKey: string) => {
  const bricksdk_v2 = new BrickSDK({
    apiKey, 
    provider: CONFIG_PROVIDER 
  }).v2
  return bricksdk_v2;
}