import Mongoose from 'mongoose';
import {Tag} from './models/TagSchema';

const createTag = (tag) => {
  return Tag(tag).save();
}

const getAllTag = () => {
  return Tag.find({})
}

const getTagById = (id) => {
  return Tag.findOne({_id: Mongoose.mongo.ObjectId(id)})
}

export { createTag, getAllTag, getTagById }
