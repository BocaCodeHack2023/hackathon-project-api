"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.show = exports.update = exports.create = exports.index = void 0;
const models_1 = require("../../../../../models");
const logger_1 = require("../../../../../utils/logger");
const moduleName = "src/controllers/api/v1/admin/users/index";
const logger = (0, logger_1.getLogger)(moduleName);
// list all users
function index(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const methodName = "index";
        const data = req.body;
        logger.info({ moduleName, methodName }, "Start!");
        try {
            const result = yield models_1.userModel.readAll(logger);
            res.send(result);
        }
        catch (error) {
            res.send({ error: error.message });
        }
    });
}
exports.index = index;
// create a new user
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const methodName = "create";
        const data = req.body;
        logger.info({ moduleName, methodName }, "Start!");
        try {
            const result = yield models_1.userModel.create(logger, data);
            res.send(result);
        }
        catch (error) {
            res.send({ error: error.message });
        }
    });
}
exports.create = create;
// update a user
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const methodName = "update";
        const data = req.body;
        logger.info({ moduleName, methodName }, "Start!");
        try {
            const result = yield models_1.userModel.update(logger, data);
            res.send(result);
        }
        catch (error) {
            res.send({ error: error.message });
        }
    });
}
exports.update = update;
// display one user
function show(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const methodName = "show";
        const data = req.body;
        logger.info({ moduleName, methodName }, "Start!");
        try {
            const result = yield models_1.userModel.readById(logger, data);
            res.send(result);
        }
        catch (error) {
            res.send({ error: error.message });
        }
    });
}
exports.show = show;
// destroy user from db
function destroy(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const methodName = "destroy";
        const data = req.body;
        logger.info({ moduleName, methodName }, "Start!");
        try {
            const result = yield models_1.userModel.remove(logger, data.id);
            res.send(result);
        }
        catch (error) {
            res.send({ error: error.message });
        }
    });
}
exports.destroy = destroy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvYXBpL3YxL2FkbWluL3VzZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFrRDtBQUNsRCx3REFBd0Q7QUFHeEQsTUFBTSxVQUFVLEdBQUcsMENBQTBDLENBQUM7QUFDOUQsTUFBTSxNQUFNLEdBQUcsSUFBQSxrQkFBUyxFQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXJDLGlCQUFpQjtBQUNqQixTQUFzQixLQUFLLENBQUMsR0FBUSxFQUFFLEdBQVE7O1FBQzVDLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUUzQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRXRCLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFbEQsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sa0JBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFL0MsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Q0FBQTtBQWRELHNCQWNDO0FBRUQsb0JBQW9CO0FBQ3BCLFNBQXNCLE1BQU0sQ0FBQyxHQUFRLEVBQUUsR0FBUTs7UUFDN0MsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBRTVCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVsRCxJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxrQkFBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFcEQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Q0FBQTtBQWRELHdCQWNDO0FBRUQsZ0JBQWdCO0FBQ2hCLFNBQXNCLE1BQU0sQ0FBQyxHQUFRLEVBQUUsR0FBUTs7UUFDN0MsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBRTVCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVsRCxJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxrQkFBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFcEQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Q0FBQTtBQWRELHdCQWNDO0FBRUQsbUJBQW1CO0FBQ25CLFNBQXNCLElBQUksQ0FBQyxHQUFRLEVBQUUsR0FBUTs7UUFDM0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBRTFCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVsRCxJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxrQkFBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFdEQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Q0FBQTtBQWRELG9CQWNDO0FBRUQsdUJBQXVCO0FBQ3ZCLFNBQXNCLE9BQU8sQ0FBQyxHQUFRLEVBQUUsR0FBUTs7UUFDOUMsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBRTdCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVsRCxJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxrQkFBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXZELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0NBQUE7QUFkRCwwQkFjQyJ9