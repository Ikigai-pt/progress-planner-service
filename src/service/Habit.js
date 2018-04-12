import Mongoose from 'mongoose';
import {Habit} from './models/HabitSchema';

const createHabit = (habit) => {
  return Habit(habit).save();
}

const getAllHabit = () => {
  return Habit.find({})
}

const getHabitById = (id) => {
  return Habit.findOne({_id: Mongoose.mongo.ObjectId(id)})
}

export { createHabit, getAllHabit, getHabitById }
