/* tslint:disable:no-console */

import * as bunyan from "bunyan";

let logger: any;
const moduleName: string = "logger";
const loggerLevel: string = (process.env.LOG_LEVEL as string) || "info";
const loggerName: string = (process.env.REPO_NAME as string) || "node";

export function getLogger(name: string): any {
  if (!logger) {
    logger = bunyan.createLogger({ name: loggerName });
    logger.level(loggerLevel);
  }

  // wrapper
  const result = {
    debug: logger.debug.bind(logger),
    error: logger.error.bind(logger),
    info: logger.info.bind(logger),
    level: logger.level.bind(logger),
    trace: logger.trace.bind(logger),
    warn: logger.warn.bind(logger),
  };

  return result;
}
