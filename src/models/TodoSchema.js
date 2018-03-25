import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: String,
  userId: Number,
  category: Number,
  tags: [String],
  priority: {type: String, enum: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'], default: 'MEDIUM'},
  deadLine: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', TodoSchema);

const TodoLedgerSchema = new Schema({
  todoId: {type: Schema.Types.ObjectId, ref: 'Todo'},
  status: String,
  date: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const TodoLedger = mongoose.model('TodoLedger', TodoLedgerSchema);

export { Todo, TodoLedger }
