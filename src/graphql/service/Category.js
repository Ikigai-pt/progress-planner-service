import {Category} from '../../models/CategorySchema';

const createCategory = (category) => {
  return Category(category).save();
}

const getAllCategory = () => {
  return Category.find({})
}

const getCategoryById = (id) => {
  return Category.find({_id: id})
}

export { createCategory, getAllCategory, getCategoryById }
