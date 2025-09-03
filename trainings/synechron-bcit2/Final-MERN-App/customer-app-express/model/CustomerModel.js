
import { getDB } from '../config/db.js';


const collection = () => getDB().collection('Customers');

export const create = async (data) => {
  return await collection().insertOne(data);
};

export const findAll = async () => {
  return await collection().find().toArray();
};

export const findById = async (id) => {
  return await collection().findOne({ _id: id });
};

export const updateById = async (id, data) => {
  return await collection().updateOne({ _id: id }, { $set: data });
};

export const deleteById = async (id) => {
  return await collection().deleteOne({ _id: id });
};
