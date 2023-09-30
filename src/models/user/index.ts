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
    enum: ['admin']
  },
  avatar_url: String,
})
const User = db.model('User', userSchema);


// create a single address with memonic
export const create = async (logger: Logger, username: string = "") => {
  const methodName = "create";
  console.log(process.env.MONGO_URI)

  await User.create({name: username});

  logger.info({ moduleName, methodName }, username);
};

if (require.main === module) {
  const logger = getLogger(moduleName);
  // test for listin orders
  (async () => {
    let result = await create(logger, "andrews ");
    // console.log(result);
  })();
}
