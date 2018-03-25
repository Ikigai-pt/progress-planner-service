import {Frequency} from '../../models/FrequencySchema';

const createFrequency = (frequency) => {
  return Frequency(frequency).save();
}

const getAllFrequency = () => {
  return Frequency.find({})
}

const getFrequencyById = (id) => {
  return Frequency.find({_id: id})
}

export { createFrequency, getAllFrequency, getFrequencyById }
