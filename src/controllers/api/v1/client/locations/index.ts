import { locationModel } from "../../../../../models";
import { getLogger } from "../../../../../utils/logger";
import { inspect } from "../../../../../utils/helper";

const moduleName = "src/controllers/api/v1/admin/locations/index";
const logger = getLogger(moduleName);

// list all locations
export async function index(req: any, res: any): Promise<void> {
  const methodName = "index";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await locationModel.readAll(logger);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// create a new location
export async function create(req: any, res: any): Promise<void> {
  const methodName = "create";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await locationModel.create(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// update a location
export async function update(req: any, res: any): Promise<void> {
  const methodName = "update";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await locationModel.update(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// display one location
export async function show(req: any, res: any): Promise<void> {
  const methodName = "show";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await locationModel.readById(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// destroy location from db
export async function destroy(req: any, res: any): Promise<void> {
  const methodName = "destroy";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await locationModel.remove(logger, data.id);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}
