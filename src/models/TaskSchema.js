import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  description: String,
  userId: Number,
  categoryId: String,
  tags: [String],
  type: {type: String, enum: ['RECURRING', 'ONETIME'], default: 'RECURRING'},
  daysOfWeek: String,
  priority: {type: String, enum: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'], default: 'MEDIUM'},
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

