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
exports.remove = exports.update = exports.readAll = exports.readById = exports.create = void 0;
const logger_1 = require("../../utils/logger");
const mongoose_1 = require("mongoose");
const { Schema } = mongoose_1.default;
const connection_1 = require("../../utils/connection");
const moduleName = "src/models/user/index";
const logger = (0, logger_1.getLogger)(moduleName);
// Create schema
const userSchema = new Schema({
    name: String,
    last_name: String,
    dob: Date,
    email: String,
    phone: String,
    address_street: String,
    address_city: String,
    address_zip: String,
    insurance_provider: String,
    last_screening: Date,
    gender: String,
    password: String,
    user_type: {
        type: String,
        enum: ['admin', 'client', 'volunteer']
    },
    avatar_url: String,
    employee_id: String
}, {
    timestamps: true
});
const User = connection_1.default.model('User', userSchema);
// create a single address with memonic
const create = (logger, data) => __awaiter(void 0, void 0, void 0, function* () {
    const methodName = "create";
    yield User.create({
        name: data.name || "",
        last_name: data.last_name || "",
        dob: data.dob || new Date(),
        email: data.email || "",
        phone: data.phone || "",
        address_street: data.address_street || "",
        address_city: data.address_city || "",
        address_zip: data.address_zip || "",
        insurance_provider: data.insurance_provider || "",
        last_screening: data.last_screening || new Date(),
        gender: data.gender || "",
        password: data.password || "",
        user_type: data.user_type || "client",
        avatar_url: data.avatar_url || "",
        employee_id: data.employee_id || ""
    });
    logger.info({ moduleName, methodName }, data);
});
exports.create = create;
const readById = (logger, id = "") => __awaiter(void 0, void 0, void 0, function* () {
    const methodName = "readById";
    if (!id) {
        console.error("Read failed, No ID");
    }
    const user = yield User.findById(id);
    logger.info({ moduleName, methodName });
    return user;
});
exports.readById = readById;
const readAll = (logger) => __awaiter(void 0, void 0, void 0, function* () {
    const methodName = "readAll";
    const users = yield User.find();
    logger.info({ moduleName, methodName });
    return users;
});
exports.readAll = readAll;
const update = (logger, data) => __awaiter(void 0, void 0, void 0, function* () {
    const methodName = "update";
    if (!data.id) {
        console.error("Update failed, no ID");
    }
    const result = yield User.findByIdAndUpdate(data.id, data);
    logger.info({ moduleName, methodName });
    return result;
});
exports.update = update;
const remove = (logger, id) => __awaiter(void 0, void 0, void 0, function* () {
    const methodName = "remove";
    if (!id) {
        console.error("Remove failed, no ID");
    }
    const result = yield User.findByIdAndDelete(id);
    logger.info({ moduleName, methodName });
    return result;
});
exports.remove = remove;
if (require.main === module) {
    const logger = (0, logger_1.getLogger)(moduleName);
    // test for listin orders
    (() => __awaiter(void 0, void 0, void 0, function* () {
        // await create(logger, {name: "andrew", last_name: "wilborn", email:"test email"});
        // let result = await readById (logger, '65186ff8bdc6c69c7645cbaf')
        // let result = await readAll(logger);
        // let result = await remove(logger, "651873cbcb4560d9ad363e69")
        // let result = await update(logger, {id: "65186ff8bdc6c69c7645cbaf", last_name: "new last name"})
        // console.log(result);
    }))();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL3VzZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUEsK0NBQStDO0FBRy9DLHVDQUFnQztBQUNoQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsa0JBQVEsQ0FBQztBQUU1Qix1REFBd0M7QUFFeEMsTUFBTSxVQUFVLEdBQUcsdUJBQXVCLENBQUM7QUFDM0MsTUFBTSxNQUFNLEdBQUcsSUFBQSxrQkFBUyxFQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXJDLGdCQUFnQjtBQUNoQixNQUFNLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUM1QixJQUFJLEVBQUUsTUFBTTtJQUNaLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLEdBQUcsRUFBRSxJQUFJO0lBQ1QsS0FBSyxFQUFFLE1BQU07SUFDYixLQUFLLEVBQUUsTUFBTTtJQUNiLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLFlBQVksRUFBRSxNQUFNO0lBQ3BCLFdBQVcsRUFBRSxNQUFNO0lBQ25CLGtCQUFrQixFQUFFLE1BQU07SUFDMUIsY0FBYyxFQUFFLElBQUk7SUFDcEIsTUFBTSxFQUFFLE1BQU07SUFDZCxRQUFRLEVBQUUsTUFBTTtJQUNoQixTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDO0tBQ3ZDO0lBQ0QsVUFBVSxFQUFFLE1BQU07SUFDbEIsV0FBVyxFQUFFLE1BQU07Q0FDcEIsRUFBRTtJQUNELFVBQVUsRUFBRSxJQUFJO0NBQ2pCLENBQUMsQ0FBQTtBQUNGLE1BQU0sSUFBSSxHQUFHLG9CQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUcxQyx1Q0FBdUM7QUFDaEMsTUFBTSxNQUFNLEdBQUcsQ0FBTyxNQUFjLEVBQUUsSUFBUyxFQUFFLEVB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