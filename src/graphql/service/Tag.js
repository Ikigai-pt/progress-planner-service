import {Tag} from '../../models/TagSchema';

const createTag = (tag) => {
  return Tag(tag).save();
}

const getAllTag = () => {
  return Tag.find({})
}

const getTagById = (id) => {
  return Tag.find({_id: id})
}

export { createTag, getAllTag, getTagById }
