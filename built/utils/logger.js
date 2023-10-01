"use strict";
/* tslint:disable:no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogger = void 0;
const bunyan = require("bunyan");
let logger;
const moduleName = "logger";
const loggerLevel = process.env.LOG_LEVEL || "info";
const loggerName = process.env.REPO_NAME || "node";
function getLogger(name) {
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
exports.getLogger = getLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsK0JBQStCOzs7QUFFL0IsaUNBQWlDO0FBRWpDLElBQUksTUFBVyxDQUFDO0FBQ2hCLE1BQU0sVUFBVSxHQUFXLFFBQVEsQ0FBQztBQUNwQyxNQUFNLFdBQVcsR0FBWSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQW9CLElBQUksTUFBTSxDQUFDO0FBQ3hFLE1BQU0sVUFBVSxHQUFZLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBb0IsSUFBSSxNQUFNLENBQUM7QUFFdkUsU0FBZ0IsU0FBUyxDQUFDLElBQVk7SUFDcEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUMzQjtJQUVELFVBQVU7SUFDVixNQUFNLE1BQU0sR0FBRztRQUNiLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQy9CLENBQUM7SUFFRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBakJELDhCQWlCQyJ9