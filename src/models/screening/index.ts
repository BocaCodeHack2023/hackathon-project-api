import Logger from "bunyan";

import { getLogger } from "../../utils/logger";
import { inspect } from "../../utils/helper";

import mongoose from 'mongoose';
const { Schema } = mongoose;

import db from '../../utils/connection';

import { verifyUserId } from "../user";
import { verifyLocationId } from "../location";

const moduleName = "src/models/user/index";
const logger = getLogger(moduleName);

// Create schema
const screeningSchema = new Schema({
  user_id: String,
  location_id: String,
  screening_type: {
    type: String,
    enum : [
      "Select a Cancer Type",
      "Adrenal Cancer",
      "Anal Cancer",
      "Bile Duct Cancer",
      "Bladder Cancer",
      "Bone Cancer",
      "Brain and Spinal Cord Tumors in Adults",
      "Brain and Spinal Cord Tumors in Children",
      "Breast Cancer",
      "Breast Cancer in Men",
      "Cancer in Adolescents",
      "Cancer in Children",
      "Cancer in Young Adults",
      "Cancer of Unknown Primary",
      "Cervical Cancer",
      "Colon Rectal Cancer",
      "Endometrial Cancer",
      "Esophagus Cancer",
      "Ewing Tumor",
      "Eye Cancer",
      "Gallbladder Cancer",
      "Gastrointestinal Carcinoid Tumor",
      "Gastrointestinal Stromal Tumor",
      "Head and Neck Cancer",
      "Hodgkin Lymphoma",
      "Kaposi Sarcoma",
      "Kidney Cancer",
      "Laryngeal and Hypopharyngeal Cancer",
      "Leukemia",
      "Acute Lymphocytic Leukemia",
      "Acute Myeloid Leukemia",
      "Chronic Lymphocytic Leukemia",
      "Chronic Myeloid Leukemia",
      "Chronic Myelomonocytic Leukemia",
      "Leukemia in Children",
      "Liver Cancer",
      "Lung Cancer",
      "Lung Carcinoid Tumor",
      "Lymphoma",
      "Non-Hodgkin Lymphoma",
      "Childhood Non-Hodgkin Lymphoma",
      "Skin Lymphoma",
      "Malignant Mesothelioma",
      "Multiple Myeloma",
      "Myelodysplastic Syndrome",
      "Nasal Cavity and Paranasal Sinus Cancer",
      "Nasopharyngeal Cancer",
      "Neuroblastoma",
      "Oral Cavity and Oropharyngeal Cancer",
      "Osteosarcoma",
      "Ovarian Cancer",
      "Pancreatic Cancer",
      "Pancreatic Neuroendocrine Tumor",
      "Penile Cancer",
      "Pituitary Tumors",
      "Prostate Cancer",
      "Retinoblastoma",
      "Rhabdomyosarcoma",
      "Salivary Gland Cancer",
      "Soft Tissue Sarcoma",
      "Skin Cancer",
      "Basal and Squamous Cell Skin Cancer",
      "Melanoma Skin Cancer",
      "Merkel Cell Skin Cancer",
      "Small Intestine Cancer",
      "Stomach Cancer",
      "Testicular Cancer",
      "Thymus Cancer",
      "Thyroid Cancer",
      "Uterine Sarcoma",
      "Vaginal Cancer",
      "Vulvar Cancer",
      "Waldenstrom Macroglobulinemia",
      "Wilms Tumor"
    ]
  },
  date: Date,
  status: {
    type: String,
    enum: ['completed', 'pending', 'incomplete']
  },
  notes: String,
  attatchments: String
}, {
  timestamps: true
})
const Screening = db.model('Screening', screeningSchema);

export const create = async (logger: Logger, data: any) => {
  const methodName = "create";
  
  if(!await verifyUserId(logger, data.user_id)){
    return {message: "Error, user id does not exist"};
  }

  if(!await verifyLocationId(logger, data.location_id)){
    return {message: "Error, location id does not exist"};
  }

  const result = await Screening.create({
    user_id: data.user_id,
    location_id: data.location_id,
    screening_type: data.screening_type || "Select a Cancer Type",
    date: data.date || new Date(),
    status: data.status || "incomplete",
    notes: data.notes || "",
    attatchments: data.attatchments || ""
  });

  logger.info({ moduleName, methodName }, data);

  return result;
};

export const readById = async (logger: Logger, id: string = "") => {
  const methodName = "readById";

  if(!id) {
    console.error("Read failed, No ID");
  }

  const result = await Screening.findById(id);

  logger.info({ moduleName, methodName });

  return result;
}

export const readAll = async (logger: Logger) => {
  const methodName = "readAll";

  const result = await Screening.find()

  logger.info({ moduleName, methodName });

  return result;
}

export const update = async (logger: Logger, data: any) => {
  const methodName = "update";

  if(!data._id){
    console.error("Update failed, no ID")
    return;
  }

  const result = await Screening.findByIdAndUpdate(data._id, data);

  logger.info({ moduleName, methodName });

  return result;
}

export const remove = async (logger: Logger, id: string) => {
  const methodName = "remove";

  if(!id) {
    console.error("Remove failed, no ID");
  }

  const result = await Screening.findByIdAndDelete(id);

  logger.info({ moduleName, methodName });

  return result;
}

if (require.main === module) {
  const logger = getLogger(moduleName);
  // test for listin orders
  (async () => {
    let result = await create(logger, {user_id: "65186ff8bdc6c69c7645cbaf", location_id: "dummy id 2", notes: "notes"});
    console.log(result);
    result = await create(logger, {user_id: "non-existant id", location_id: "dummy id 2", notes: "notes"})
    console.log(result);
    // let result = await readById (logger, '65188b70c392872824e22e2e')
    // let result = await readAll(logger);
    // let result = await remove(logger, "65188b70c392872824e22e2e")
    // let result = await update(logger, {_id: "65188b70c392872824e22e2e", notes: "new notes"})
  })();
}