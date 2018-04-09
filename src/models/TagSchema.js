
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export const Tag = mongoose.model('Tag', tagSchema);
