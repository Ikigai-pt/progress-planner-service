import mongoose from 'mongoose';
import {ENUM_PRIORITIES, ENUM_STATUS} from './constants';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  description: String,
  userId: Number,
  categoryId: String,
  status: {type: String, enum: ENUM_STATUS, default: 'PLAN'},
  tags: [String],
  daysOfWeekId: String,
  priority: {type: String, enum: ENUM_PRIORITIES, default: 'MEDIUM'},
  goalId: String,
  startDate: Date,
  endDate: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Task = mongoose.model('Task', TaskSchema);

const TaskLedgerSchema = new Schema({
  taskId: {type: Schema.Types.ObjectId, ref: 'Task'},
  userId: {type: Number, default: 1},
  status: String,
  date: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const TaskLedger = mongoose.model('TaskLedger', TaskLedgerSchema);

export { Task, TaskLedger }

