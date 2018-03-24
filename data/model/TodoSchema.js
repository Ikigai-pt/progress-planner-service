
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: String,
  description: String,
  category: Number,
  tags: [String],
  type: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Todo = mongoose.model('Todo', todoSchema);
