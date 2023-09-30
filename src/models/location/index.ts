import Logger from "bunyan";

import { getLogger } from "../../utils/logger";
import { inspect } from "../../utils/helper";

import mongoose from 'mongoose';
const { Schema } = mongoose;

import db from '../../utils/connection';

const moduleName = "src/models/user/index";
const logger = getLogger(moduleName);

// Create schema
const locationSchema = new Schema({
  name: String,
  address_street: String,
  address_city: String,
  address_state: String,
  address_zip: String,
  screenings_offered: String, // TODO: possibly change datatype for this?
  status: {
    type: String,
    enum: ["active", "disabled"]
  },
  operational_hours: String
}, {
  timestamps: true
})
const Location = db.model('Location', locationSchema);

export const create = async (logger: Logger, data: any) => {
  const methodName = "create";
  
  const result = await Location.create({
    name: data.name || "",
    address_street: data.address_street || "",
    address_city: data.address_city || "",
    address_state: data.address_state || "",
    address_zip: data.address_zip || "",
    screenings_offered: data.screenings_offered || "",
    status: data.status || "active",
    operational_hours: data.operational_hours || "unknown"
  });

  logger.info({ moduleName, methodName }, data);

  return result;
};

export const readById = async (logger: Logger, id: string = "") => {
  const methodName = "readById";

  if(!id) {
    console.error("Read failed, No ID");
  }

  const user = await Location.findById(id);

  logger.info({ moduleName, methodName });

  return user;
}

export const readAll = async (logger: Logger) => {
  const methodName = "readAll";

  const users = await Location.find()

  logger.info({ moduleName, methodName });

  return users;
}

export const update = async (logger: Logger, data: any) => {
  const methodName = "update";

  if(!data._id){
    console.error("Update failed, no ID")
    return;
  }

  const result = await Location.findByIdAndUpdate(data._id, data);

  logger.info({ moduleName, methodName });

  return result;
}

export const remove = async (logger: Logger, id: string) => {
  const methodName = "remove";

  if(!id) {
    console.error("Remove failed, no ID");
  }

  const result = await Location.findByIdAndDelete(id);

  logger.info({ moduleName, methodName });

  return result;
}

if (require.main === module) {
  const logger = getLogger(moduleName);
  // test for listin orders
  (async () => {
    // let result = await create(logger, {});
    // let result = await readById (logger, '65187f25a4df9ce3628fc873')
    // let result = await readAll(logger);
    // let result = await remove(logger, "6518811ce7bdf278f77b95f3")
    // let result = await update(logger, {_id: "65187f25a4df9ce3628fc873"})
    // console.log(result);
  })();
}