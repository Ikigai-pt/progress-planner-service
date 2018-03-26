import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
  categoryId: String,
})

export const Goal = mongoose.model('Goal', goalSchema);
