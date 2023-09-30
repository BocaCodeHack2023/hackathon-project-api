import { organizationModel } from "../../../../../models";
import { getLogger } from "../../../../../utils/logger";
import { inspect } from "../../../../../utils/helper";

const moduleName = "src/controllers/api/v1/admin/organizations/index";
const logger = getLogger(moduleName);

// list all organizations
export async function index(req: any, res: any): Promise<void> {
  const methodName = "index";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await organizationModel.readAll(logger);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// create a new organization
export async function create(req: any, res: any): Promise<void> {
  const methodName = "create";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await organizationModel.create(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// update a organization
export async function update(req: any, res: any): Promise<void> {
  const methodName = "update";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await organizationModel.update(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// display one organization
export async function show(req: any, res: any): Promise<void> {
  const methodName = "show";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await organizationModel.readById(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// destroy organization from db
export async function destroy(req: any, res: any): Promise<void> {
  const methodName = "destroy";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await organizationModel.remove(logger, data.id);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}
