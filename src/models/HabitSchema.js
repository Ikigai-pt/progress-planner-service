
import mongoose from 'mongoose';
import { ENUM_STATUS } from './constants';

const Schema = mongoose.Schema;

const measurementScale = new Schema({
  unit: String
});
const Measurement = mongoose.model('MeasuremntScale', measurementScale);

const habitSchema = new Schema({
  title: String,
  description: String,
  userId: String,
  categoryId: String,
  status: {type: String, enum: ENUM_STATUS, default: 'PLAN'},
  tags: [String],
  daysOfWeek: String,
  unit: { ref: 'MeasuremntScale', type: String },
  progress: { enum: ['INCREASE', 'DECREASE'] },
  goalId: String,
  startDate: Date,
  endDate: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const habitLedgerSchema = new Schema({
  habitId: {type: Schema.Types.ObjectId, ref: 'Habit'},
  status: String,
  userId: {type: Number, default: 1},
  date: Date,
  measurement: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const Habit = mongoose.model('Habit', habitSchema);
export const HabitLedger = mongoose.model('HabitLedger', habitLedgerSchema);

