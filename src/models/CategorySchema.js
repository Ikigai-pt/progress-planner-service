import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  title: String,
  description: String,
  status: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Category = mongoose.model('Category', categorySchema);

