
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: String,
})

export const Tag = mongoose.model('Tag', tagSchema);
