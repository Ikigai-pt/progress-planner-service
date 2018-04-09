import Mongoose from 'mongoose';
import { Goal } from '../../models/GoalSchema';

const createGoal = (newGoal) => {
  const goal = Goal(newGoal);
  return goal.save();
}

const getAllGoal = () => {
  return Goal.find({})
}

const getGoalById = (id) => {
  return Goal.findOne({_id: Mongoose.mongo.ObjectId(id)})
}

export { createGoal, getAllGoal, getGoalById }
