import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const habitLedgerSchema = new Schema({
  habitId: String,
  status: String,
  date: Date,
  data: [{ key:String, value: Number }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// taskSchema.methods.validate = () => {
//   this.title
// }
export const HabitLedger = mongoose.model('HabitLedger', habitLedgerSchema);
