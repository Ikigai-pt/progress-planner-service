import { GraphQLDate } from 'graphql-iso-date';
import {
  getTagById,
  getFrequencyById,
  getCategoryById,
  getHabitById,
  getAllHabit,
  createHabit,
} from 'service';

const habitResolver = {
  Date: GraphQLDate,

  Query: {
    allHabits(_, args) {
      const habits = getAllHabit();
      return habits;
    },
    habitById(_, { id }) {
      return getHabitById(id);
    },
  },

  Habit: {
    category(habit) {
      return getCategoryById(habit.categoryId)
    },
    tags(habit) {
      console.log(" tags "+habit.tags)
      return habit.tags.map((tag) => getTagById(tag))
    },
    daysOfWeek(habit) {
      return getFrequencyById(habit.daysOfWeekId)
    },
    goal(habit) {
      return getGoalById(habit.goalId)
    },
  },

  Mutation: {
    createHabit: (root, { habit: {
      title,
      description,
      categoryId,
      tags,
      daysOfWeekId,
      progress,
      goalId,
      startDate,
      endDate,
    }}) => {
      return createHabit({
      title,
      description,
      categoryId,
      tags,
      daysOfWeekId,
      progress,
      goalId,
      startDate,
      endDate,
      })
    }
  }
};

export default habitResolver;
