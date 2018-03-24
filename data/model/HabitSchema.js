
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const habitSchema = new Schema({
  name: String,
  description: String,
  category: Number,
  tags: [String],
  frequency: Number,
  data: [{ key:String, value: Number, unit:String }],
  startDate: Date,
  endDate: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// taskSchema.methods.validate = () => {
//   this.title
// }
export const Habit = mongoose.model('Habit', habitSchema);
