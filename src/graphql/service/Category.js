import Mongoose from 'mongoose';
import {Category} from '../../models/CategorySchema';

const createCategory = (category) => {
  return Category(category).save();
}

const getAllCategory = () => {
  return Category.find({})
}

const getCategoryById = (id) => {
  return Category.findOne({_id: Mongoose.mongo.ObjectId(id)})
}

export { createCategory, getAllCategory, getCategoryById }
