import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  title: String,
  userId: Number,
  description: String,
  status: String,
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  categoryId: String,
})

export const Goal = mongoose.model('Goal', goalSchema);
