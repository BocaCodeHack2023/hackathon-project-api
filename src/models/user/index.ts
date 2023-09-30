import Logger from "bunyan";

import { getLogger } from "../../utils/logger";
import { inspect } from "../../utils/helper";

const moduleName = "src/models/user/index";
const logger = getLogger(moduleName);

// create a single address with memonic
export const create = async (logger: Logger, username: string = "") => {
  const methodName = "create";

  logger.info({ moduleName, methodName }, username);
};

if (require.main === module) {
  const logger = getLogger(moduleName);

  // test for listin orders
  (async () => {
    let result = await create(logger, "andrews");
    // console.log(result);
  })();
}
