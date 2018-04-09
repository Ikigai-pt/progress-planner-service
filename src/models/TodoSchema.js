import mongoose from 'mongoose';
import { ENUM_STATUS, ENUM_PRIORITIES } from './constants';
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: String,
  userId: Number,
  categoryId: String,
  status: {type: String, enum: ENUM_STATUS, default: 'PLAN'},
  tags: [String],
  priority: {type: String, enum: ENUM_PRIORITIES, default: 'MEDIUM'},
  deadLine: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', TodoSchema);

const todoLedgerSchema = new Schema({
  todoId: {type: Schema.Types.ObjectId, ref: 'Todo'},
  userId: {type: Number, default: 1},
  status: String,
  date: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const TodoLedger = mongoose.model('TodoLedger', todoLedgerSchema);

export { Todo, TodoLedger }
