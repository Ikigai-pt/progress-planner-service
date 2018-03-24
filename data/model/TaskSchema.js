import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
  description: String,
  category: Number,
  tags: [String],
  type: String,
  frequency: Number,
  startDate: Date,
  endDate: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Task = mongoose.model('Task', TaskSchema);

const TaskLedgerSchema = new Schema({
  taskId: {type: Schema.Types.ObjectId, ref: 'Task'},
  status: String,
  date: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const TaskLedger = mongoose.model('TaskLedger', TaskLedgerSchema);

export { Task, TaskLedger }

