import { getLogger } from "../../utils/logger";
import { inspect } from "../../utils/helper";

const moduleName = "src/models/user/index";
const logger = getLogger(moduleName);

// create a single address with memonic
export const create = async (coin: string = "TRX") => {
  const methodName = "create";

  logger.info({ moduleName, methodName }, "Start!");
};
