const { BrickSDK } = require('@brickglobal/brick-sdk');
export let brickSDKv2: any
export const brickSDK_v2 = async (apiKey: string) => {
  const bricksdk_v2 = new BrickSDK({
    apiKey, 
    provider: "http://139.99.121.150:6699/" 
  }).v2
  return bricksdk_v2;
}