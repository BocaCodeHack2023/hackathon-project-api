import Logger from "bunyan";

import { getLogger } from "../../utils/logger";
import { inspect } from "../../utils/helper";

import mongoose from 'mongoose';
const { Schema } = mongoose;

import db from '../../utils/connection';

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

  const user = await Screening.findById(id);

  logger.info({ moduleName, methodName });

  return user;
}

export const readAll = async (logger: Logger) => {
  const methodName = "readAll";

  const users = await Screening.find()

  logger.info({ moduleName, methodName });

  return users;
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
    let result = await create(logger, {user_id: "dummy id", location_id: "dummy id 2", notes: "notes"});
    // let result = await readById (logger, '65187f25a4df9ce3628fc873')
    // let result = await readAll(logger);
    // let result = await remove(logger, "6518811ce7bdf278f77b95f3")
    // let result = await update(logger, {_id: "65187f25a4df9ce3628fc873", description: "new description"})
    console.log(result);
  })();
}