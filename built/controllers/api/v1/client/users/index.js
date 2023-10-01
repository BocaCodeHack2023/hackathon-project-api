"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = exports.update = exports.create = void 0;
const logger_1 = require("../../../../../utils/logger");
const helper_1 = require("../../../../../utils/helper");
const moduleName = "src/controllers/api/v1/client/users/index";
const logger = (0, logger_1.getLogger)(moduleName);
// create a new user
function create(req, res) {
    const methodName = "create";
    logger.info({ moduleName, methodName }, "Start!");
    const coin = req.body["coin"] ? req.body["coin"].toUpperCase() : "";
    logger.debug({ moduleName, methodName }, "body:", (0, helper_1.inspect)(req.body));
}
exports.create = create;
// update a user
function update(req, res) {
    const methodName = "update";
    logger.info({ moduleName, methodName }, "Start!");
}
exports.update = update;
// display one user
function show(req, res) {
    const methodName = "show";
    logger.info({ moduleName, methodName }, "Start!");
}
exports.show = show;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvYXBpL3YxL2NsaWVudC91c2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3REFBd0Q7QUFDeEQsd0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFHLDJDQUEyQyxDQUFDO0FBQy9ELE1BQU0sTUFBTSxHQUFHLElBQUEsa0JBQVMsRUFBQyxVQUFVLENBQUMsQ0FBQztBQUVyQyxvQkFBb0I7QUFDcEIsU0FBZ0IsTUFBTSxDQUFDLEdBQVEsRUFBRSxHQUFRO0lBQ3ZDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQztJQUU1QixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRWxELE1BQU0sSUFBSSxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUU1RSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFBLGdCQUFPLEVBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdkUsQ0FBQztBQVJELHdCQVFDO0FBRUQsZ0JBQWdCO0FBQ2hCLFNBQWdCLE1BQU0sQ0FBQyxHQUFRLEVBQUUsR0FBUTtJQUN2QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFFNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBSkQsd0JBSUM7QUFFRCxtQkFBbUI7QUFDbkIsU0FBZ0IsSUFBSSxDQUFDLEdBQVEsRUFBRSxHQUFRO0lBQ3JDLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztJQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFKRCxvQkFJQyJ9