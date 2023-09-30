import Logger from "bunyan";

import { getLogger } from "../../utils/logger";
import { inspect } from "../../utils/helper";

import mongoose from 'mongoose';
const { Schema } = mongoose;

import db from '../../utils/connection';

const moduleName = "src/models/user/index";
const logger = getLogger(moduleName);

// Create schema
const rideSchema = new Schema({
  screening_id: String,
  volunteer_id: String,
  ride_status: {
    type: String,
    enum: ["pending", "completed", "canceled"]
  }
}, {
  timestamps: true
})
const Ride = db.model('Ride', rideSchema);

export const create = async (logger: Logger, data: any) => {
  const methodName = "create";

  const result = await Ride.create({
    screening_id: data.screening_id,
    volunteer_id: data.screening_id,
    ride_status: "pending"
  });

  logger.info({ moduleName, methodName }, data);

  return result;
};

export const readById = async (logger: Logger, id: string = "") => {
  const methodName = "readById";

  if(!id) {
    console.error("Read failed, No ID");
  }

  const user = await Ride.findById(id);

  logger.info({ moduleName, methodName });

  return user;
}

export const readAll = async (logger: Logger) => {
  const methodName = "readAll";

  const users = await Ride.find()

  logger.info({ moduleName, methodName });

  return users;
}

export const update = async (logger: Logger, data: any) => {
  const methodName = "update";

  if(!data._id){
    console.error("Update failed, no ID")
    return;
  }

  const result = await Ride.findByIdAndUpdate(data._id, data);

  logger.info({ moduleName, methodName });

  return result;
}

export const remove = async (logger: Logger, id: string) => {
  const methodName = "remove";

  if(!id) {
    console.error("Remove failed, no ID");
  }

  const result = await Ride.findByIdAndDelete(id);

  logger.info({ moduleName, methodName });

  return result;
}

if (require.main === module) {
  const logger = getLogger(moduleName);
  // test for listin orders
  (async () => {
    // let result = await create(logger, {screening_id: "sample id", volunteer_id: "sample id"});
    // let result = await readById (logger, '6518948be52e76687ea3358d')
    // let result = await readAll(logger);
    // let result = await remove(logger, "6518948be52e76687ea3358d")
    // let result = await update(logger, {_id: "6518948be52e76687ea3358d", name: "new name"})
    // console.log(result);
  })();
}