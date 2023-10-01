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
exports.create = void 0;
const logger_1 = require("../../utils/logger");
const mongoose_1 = require("mongoose");
const { Schema } = mongoose_1.default;
const connection_1 = require("../../utils/connection");
const moduleName = "src/models/user/index";
const logger = (0, logger_1.getLogger)(moduleName);
const orgSchema = new Schema({
    id: Number,
    name: String,
    description: String,
    organization_type: {
        type: String,
        enum: ['business', 'school']
    },
    email: String,
    phone: String,
    address_street: String,
    address_city: String,
    address_zip: String
}, {
    timestamps: true
});
const Organization = connection_1.default.model('Organization', orgSchema);
const create = (logger, data) => __awaiter(void 0, void 0, void 0, function* () {
    const methodName = "create";
    const result = yield Organization.create({
        name: data.name || "",
        description: data.description || "",
        organization_type: data.organization_type || "business",
        email: data.email || "",
        phone: data.phone || "",
        address_street: data.address_street || "",
        address_city: data.address_city || "",
        address_zip: data.address_zip || "",
    });
    logger.info({ moduleName, methodName }, data);
    return result;
});
exports.create = create;
if (require.main === module) {
    const logger = (0, logger_1.getLogger)(moduleName);
    // test for listin orders
    (() => __awaiter(void 0, void 0, void 0, function* () {
        let result = yield (0, exports.create)(logger, { name: "City Furniture ss", description: "descripiton here" });
        // let result = await readById (logger, '65186ff8bdc6c69c7645cbaf')
        // let result = await readAll(logger);
        // let result = await remove(logger, "651873cbcb4560d9ad363e69")
        // let result = await update(logger, {id: "65186ff8bdc6c69c7645cbaf", last_name: "new last name"})
        console.log(result);
    }))();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL29yZ2FuaXphdGlvbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSwrQ0FBK0M7QUFHL0MsdUNBQWdDO0FBQ2hDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxrQkFBUSxDQUFDO0FBRTVCLHVEQUF3QztBQUV4QyxNQUFNLFVBQVUsR0FBRyx1QkFBdUIsQ0FBQztBQUMzQyxNQUFNLE1BQU0sR0FBRyxJQUFBLGtCQUFTLEVBQUMsVUFBVSxDQUFDLENBQUM7QUFFckMsTUFBTSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDM0IsRUFBRSxFQUFFLE1BQU07SUFDVixJQUFJLEVBQUUsTUFBTTtJQUNaLFdBQVcsRUFBRSxNQUFNO0lBQ25CLGlCQUFpQixFQUFFO1FBQ2pCLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQztLQUM3QjtJQUNELEtBQUssRUFBRSxNQUFNO0lBQ2IsS0FBSyxFQUFFLE1BQU07SUFDYixjQUFjLEVBQUUsTUFBTTtJQUN0QixZQUFZLEVBQUUsTUFBTTtJQUNwQixXQUFXLEVBQUUsTUFBTTtDQUNwQixFQUFFO0lBQ0QsVUFBVSxFQUFFLElBQUk7Q0FDakIsQ0FBQyxDQUFBO0FBQ0YsTUFBTSxZQUFZLEdBQUcsb0JBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRWxELE1BQU0sTUFBTSxHQUFHLENBQU8sTUFBYyxFQUFFLElBQVMsRUFBRSxFQUFFO0lBQ3hELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQztJQUU1QixNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtRQUNyQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFO1FBQ25DLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxVQUFVO1FBQ3ZELEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtRQUN2QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFO1FBQ3pDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUU7UUFDckMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRTtLQUNwQyxDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTlDLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQSxDQUFDO0FBakJXLFFBQUEsTUFBTSxVQWlCakI7QUFFRixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO0lBQzNCLE1BQU0sTUFBTSxHQUFHLElBQUEsa0JBQVMsRUFBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyx5QkFBeUI7SUFDekIsQ0FBQyxHQUFTLEVBQUU7UUFDVixJQUFJLE1BQU0sR0FBRyxNQUFNLElBQUEsY0FBTSxFQUFDLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ2hHLG1FQUFtRTtRQUNuRSxzQ0FBc0M7UUFDdEMsZ0VBQWdFO1FBQ2hFLGtHQUFrRztRQUNsRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQSxDQUFDLEVBQUUsQ0FBQztDQUNOIn0=