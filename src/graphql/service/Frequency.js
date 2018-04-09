import Mongoose from 'mongoose';
import {Frequency} from '../../models/FrequencySchema';

const createFrequency = (frequency) => {
  return Frequency(frequency).save();
}

const getAllFrequency = () => {
  return Frequency.find({})
}

const getFrequencyById = (id) => {
  return Frequency.findOne({_id: Mongoose.mongo.ObjectId(id)})
}

export { createFrequency, getAllFrequency, getFrequencyById }
