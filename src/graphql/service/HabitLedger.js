import Mongoose from 'mongoose';
import {HabitLedger} from '../../models/HabitSchema';

const addToHabitLedger = (newHabit) => {
  const taskLedger = HabitLedger(newHabit);
  return taskLedger.save();
}

const getHabitLedgerByDate = (filterDate) => {
  return HabitLedger.find({date: filterDate})
}

// TODO monogose how to filter between range
const getHabitLedgerByRange = (startDate, endDate) => {
  return HabitLedger.find({date: startDate})
}

export { addToHabitLedger, getHabitLedgerByDate }
