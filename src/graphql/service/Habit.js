import {Habit} from '../../models/HabitSchema';

const createHabit = (habit) => {
  return Habit(habit).save();
}

const getAllHabit = () => {
  return Habit.find({})
}

const getHabitById = (id) => {
  return Habit.find({_id: id})
}

export { createHabit, getAllHabit, getHabitById }
