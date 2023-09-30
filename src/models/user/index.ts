import Logger from "bunyan";

import { getLogger } from "../../utils/logger";
import { inspect } from "../../utils/helper";

import mongoose from 'mongoose';
const { Schema } = mongoose;

import db from '../../utils/connection';

const moduleName = "src/models/user/index";
const logger = getLogger(moduleName);

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
})
const User = db.model('User', userSchema);


// create a single address with memonic
export const create = async (logger: Logger, data: any) => {
  const methodName = "create";
  
  await User.create({
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
};

export const readById = async (logger: Logger, id: string = "") => {
  const methodName = "readById";

  if(!id) {
    console.error("Read failed, No ID");
  }

  const user = await User.findById(id);

  logger.info({ moduleName, methodName });

  return user;
}

if (require.main === module) {
  const logger = getLogger(moduleName);
  // test for listin orders
  (async () => {
    await create(logger, {name: "andrew", last_name: "wilborn", email:"test email"});
    let result = await readById (logger, '65186ff8bdc6c69c7645cbaf')
    // console.log(result);
  })();
}
