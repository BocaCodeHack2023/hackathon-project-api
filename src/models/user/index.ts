import Logger from "bunyan";

import { getLogger } from "../../utils/logger";
import { inspect } from "../../utils/helper";

import mongoose from "mongoose";
const { Schema } = mongoose;

import db from "../../utils/connection";
import { verifyOrganizationId } from "../organization";

const moduleName = "src/models/user/index";
const logger = getLogger(moduleName);

// Create schema
const userSchema = new Schema(
  {
    name: String,
    company_id: String,
    last_name: String,
    dob: Date,
    email: String,
    phone: String,
    address_street: String,
    address_city: String,
    address_state: String,
    address_zip: String,
    insurance_provider: String,
    last_screening: Date,
    gender: String,
    password: String,
    user_type: {
      type: String,
      enum: ["admin", "client", "volunteer"],
    },
    avatar_url: String,
    employee_id: String,
  },
  {
    timestamps: true,
  }
);
const User = db.model("User", userSchema);

// create a single address with memonic
export const create = async (logger: Logger, data: any) => {
  const methodName = "create";

  if (
    data.user_type != "volunteer" &&
    !(await verifyOrganizationId(logger, data.company_id))
  ) {
    return { message: "Error, organization id does not exist" };
  }

  let result = await User.create({
    name: data.name || "",
    company_id: data.company_id || "", // Can be falsey if user is a volunteer
    last_name: data.last_name || "",
    dob: data.dob || new Date(),
    email: data.email || "",
    phone: data.phone || "",
    address_street: data.address_street || "",
    address_city: data.address_city || "",
    address_state: data.address_state || "",
    address_zip: data.address_zip || "",
    insurance_provider: data.insurance_provider || "",
    last_screening: data.last_screening || new Date(),
    gender: data.gender || "",
    password: data.password || "",
    user_type: data.user_type || "client",
    avatar_url: data.avatar_url || "",
    employee_id: data.employee_id || "",
  });

  logger.info({ moduleName, methodName }, data);

  return result;
};

export const readById = async (logger: Logger, id: string = "") => {
  const methodName = "readById";

  if (!id) {
    console.error("Read failed, No ID");
  }

  const result = await User.findById(id);

  logger.info({ moduleName, methodName }, `result: ${result} `);

  return result;
};

export const readAll = async (logger: Logger) => {
  const methodName = "readAll";

  const result = await User.find();

  logger.info({ moduleName, methodName });

  return result;
};

// It's possible that data._id should be data.id instead here.  If it breaks try that.
export const update = async (logger: Logger, data: any) => {
  const methodName = "update";

  if (!data._id) {
    console.error("Update failed, no ID");
  }

  const result = await User.findByIdAndUpdate(data._id, data);

  logger.info({ moduleName, methodName });

  return result;
};

export const remove = async (logger: Logger, id: string) => {
  const methodName = "remove";

  if (!id) {
    console.error("Remove failed, no ID");
  }

  const result = await User.findByIdAndDelete(id);

  logger.info({ moduleName, methodName });

  return result;
};

export const verifyUserId = async (logger: Logger, id: string) => {
  const methodName = "verifyUserId";

  if (!id) {
    return false;
  }

  const result = await User.exists({ _id: id });

  logger.info({ moduleName, methodName });

  return result;
};

if (require.main === module) {
  const logger = getLogger(moduleName);
  // test for listin orders
  (async () => {
    // let result = await create(logger, {name: "andrew", last_name: "wilborn", email:"test email", company_id: "65187f25a4df9ce3628fc873"});
    // let result = await readById (logger, '65186ff8bdc6c69c7645cbaf')
    // let result = await readAll(logger);
    // let result = await remove(logger, "651873cbcb4560d9ad363e69")
    // let result = await update(logger, {_id: "65186ff8bdc6c69c7645cbaf", last_name: "new last name"})
    // console.log(result);
  })();
}
