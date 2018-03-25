import {HabitLedger} from '../../models/HabitLedgerSchema';

const createHabitLedger = (habitLedger) => {
  return HabitLedger(habitLedger).save();
}

const getAllHabitLedger = () => {
  return HabitLedger.find({})
}

const getHabitLedgerById = (id) => {
  return HabitLedger.find({_id: id})
}

export { createHabitLedger, getAllHabitLedger, getHabitLedgerById }
