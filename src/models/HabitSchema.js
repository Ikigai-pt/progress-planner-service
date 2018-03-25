
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const measurementScale = new Schema({
  unit: String
});
const Measurement = mongoose.model('MeasuremntScale', measurementScale);

const habitSchema = new Schema({
  title: String,
  description: String,
  category: Number,
  tags: [String],
  daysOfWeek: Number,
  unit: { ref: 'MeasuremntScale', type: String },
  progress: { enum: ['INCREASE', 'DECREASE'] },
  goalId: Number,
  startDate: Date,
  endDate: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const habitLedgerSchema = new Schema({
  habitId: {type: Schema.Types.ObjectId, ref: 'Habit'},
  status: String,
  date: Date,
  measurement: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Habit = mongoose.model('Habit', habitSchema);
export const HabitLedger = mongoose.model('HabitLedger', HabitLedgerSchema);

// taskSchema.methods.validate = () => {
//   this.title
// }
