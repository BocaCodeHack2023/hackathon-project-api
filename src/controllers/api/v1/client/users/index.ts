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
export async function update(req: any, res: any): Promise<void> {
  const methodName = "update";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await userModel.update(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// display one user
export async function show(req: any, res: any): Promise<void> {
  const methodName = "show";

  const data = req.params.id;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await userModel.readById(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}
