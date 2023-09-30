import { screeningModel } from "../../../../../models";
import { getLogger } from "../../../../../utils/logger";
import { inspect } from "../../../../../utils/helper";

const moduleName = "src/controllers/api/v1/admin/screenings/index";
const logger = getLogger(moduleName);

// list all screenings
export async function index(req: any, res: any): Promise<void> {
  const methodName = "index";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await screeningModel.readAll(logger);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// create a new screening
export async function create(req: any, res: any): Promise<void> {
  const methodName = "create";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await screeningModel.create(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// update a screening
export async function update(req: any, res: any): Promise<void> {
  const methodName = "update";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await screeningModel.update(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// display one screening
export async function show(req: any, res: any): Promise<void> {
  const methodName = "show";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await screeningModel.readById(logger, data);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}

// destroy screening from db
export async function destroy(req: any, res: any): Promise<void> {
  const methodName = "destroy";

  const data = req.body;

  logger.info({ moduleName, methodName }, "Start!");

  try {
    const result = await screeningModel.remove(logger, data.id);

    res.send(result);
  } catch (error) {
    res.send({ error: error.message });
  }
}
