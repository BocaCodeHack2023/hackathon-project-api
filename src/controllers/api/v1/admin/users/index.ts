import { userModel } from "../../../../../models";
import { getLogger } from "../../../../../utils/logger";
import { inspect } from "../../../../../utils/helper";

const moduleName = "src/controllers/api/v1/admin/users/index";
const logger = getLogger(moduleName);

export function create(req: any, res: any): any {
  const methodName = "create";

  logger.info({ moduleName, methodName }, "Start!");

  const coin: string = req.body["coin"] ? req.body["coin"].toUpperCase() : "";

  logger.debug({ moduleName, methodName }, "body:", inspect(req.body));

  // _setModel(coin)
  //   .create(coin)
  //   .then((response: any) => {
  //     res.send(response);
  //   })
  //   .catch((error: any) => {
  //     console.log(error);
  //   });
}

export function update(req: any, res: any): any {
  const methodName = "update";

  logger.info({ moduleName, methodName }, "Start!");
}

export function show(req: any, res: any): any {
  const methodName = "show";

  logger.info({ moduleName, methodName }, "Start!");
}

export function destroy(req: any, res: any): any {
  const methodName = "destroy";

  logger.info({ moduleName, methodName }, "Start!");
}
