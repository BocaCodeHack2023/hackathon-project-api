import { userModel } from "../../../../../models";
import { getLogger } from "../../../../../utils/logger";
import { inspect } from "../../../../../utils/helper";

const moduleName = "src/controllers/api/v1/admin/users/index";
const logger = getLogger(moduleName);

// list all users
export async function index(req: any, res: any): Promise<void> {
  const methodName = "index";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await userModel.readAll(logger);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// create a new user
export async function create(req: any, res: any): Promise<void> {
  const methodName = "create";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await userModel.create(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
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
  // logger.info({ moduleName, methodName }, req);

  try {
    const result = await userModel.readById(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// destroy user from db
export async function destroy(req: any, res: any): Promise<void> {
  const methodName = "destroy";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await userModel.remove(logger, data.id);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}
