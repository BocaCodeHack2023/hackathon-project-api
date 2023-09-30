import Logger from "bunyan";

import { getLogger } from "../../utils/logger";
import { inspect } from "../../utils/helper";

import mongoose from 'mongoose';
const { Schema } = mongoose;

import db from '../../utils/connection';

const moduleName = "src/models/user/index";
const logger = getLogger(moduleName);

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
})
const Organization = db.model('Organization', orgSchema);

export const create = async (logger: Logger, data: any) => {
  const methodName = "create";
  
  const result = await Organization.create({
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
};

if (require.main === module) {
  const logger = getLogger(moduleName);
  // test for listin orders
  (async () => {
    let result = await create(logger, {name: "City Furniture ss", description: "descripiton here"});
    // let result = await readById (logger, '65186ff8bdc6c69c7645cbaf')
    // let result = await readAll(logger);
    // let result = await remove(logger, "651873cbcb4560d9ad363e69")
    // let result = await update(logger, {id: "65186ff8bdc6c69c7645cbaf", last_name: "new last name"})
    console.log(result);
  })();
}