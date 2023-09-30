import { rideModel } from "../../../../../models";
import { getLogger } from "../../../../../utils/logger";
import { inspect } from "../../../../../utils/helper";

const moduleName = "src/controllers/api/v1/admin/rides/index";
const logger = getLogger(moduleName);

// list all rides
export async function index(req: any, res: any): Promise<void> {
  const methodName = "index";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await rideModel.readAll(logger);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// create a new ride
export async function create(req: any, res: any): Promise<void> {
  const methodName = "create";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await rideModel.create(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// update a ride
export async function update(req: any, res: any): Promise<void> {
  const methodName = "update";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await rideModel.update(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// display one ride
export async function show(req: any, res: any): Promise<void> {
  const methodName = "show";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await rideModel.readById(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// destroy ride from db
export async function destroy(req: any, res: any): Promise<void> {
  const methodName = "destroy";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await rideModel.remove(logger, data.id);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}
