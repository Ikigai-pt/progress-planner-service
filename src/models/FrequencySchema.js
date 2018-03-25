import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const frequencySchema = new Schema({
  monday: Boolean,
  tuesday: Boolean,
  wednesday: Boolean,
  thursday: Boolean,
  friday: Boolean,
  saturday: Boolean,
  sunday: Boolean,
});

export const Frequency = mongoose.model('Frequency', frequencySchema);
