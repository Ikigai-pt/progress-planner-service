import { Goal } from '../../models/GoalSchema';

const createGoal = (goal) => {
  return Goal(goal).save();
}

const getAllGoal = () => {
  return Goal.find({})
}

const getGoalById = (id) => {
  return Goal.find({_id: id})
}

export { createGoal, getAllGoal, getGoalById }
