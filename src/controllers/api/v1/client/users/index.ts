import { userModel } from "../../../../../models";
import { getLogger } from "../../../../../utils/logger";
import { inspect } from "../../../../../utils/helper";

const moduleName = "src/controllers/api/v1/client/users/index";
const logger = getLogger(moduleName);

// create a new user
export function create(req: any, res: any): any {
  const methodName = "create";

  logger.info({ moduleName, methodName }, "Start!");

  const coin: string = req.body["coin"] ? req.body["coin"].toUpperCase() : "";

  logger.debug({ moduleName, methodName }, "body:", inspect(req.body));
}

// update a user
export function update(req: any, res: any): any {
  const methodName = "update";

  logger.info({ moduleName, methodName }, "Start!");
}

// display one user
export function show(req: any, res: any): any {
  const methodName = "show";

  logger.info({ moduleName, methodName }, "Start!");
}
