import { initApollo } from "./apollo";
import { brickSDKv2 } from "./BrickSDK";

(async () => {
  try {
    await initApollo();
  } catch (e) {
    throw e;
  }
})();

