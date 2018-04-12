import { GraphQLDate } from 'graphql-iso-date';
import {
  getAllGoal,
  getGoalById,
  createGoal,
  getCategoryById,
} from 'service';

const goalResolver = {
  Date: GraphQLDate,

  Query: {
    allGoals(_, args) {
      return getAllGoal();
    },
    goalById(_, { id }) {
      return getGoalById(id);
    }
  },

  Goal: {
    category(task) {
      return getCategoryById(task.categoryId)
    },
  },

  Mutation: {
    createGoal: ( root, { goal: {
        title,
        description,
        startDate,
        endDate,
        categoryId,
    }} ) => {
      return createGoal({
        title,
        description,
        startDate,
        endDate,
        categoryId,
      });
    }
  }

};

export default goalResolver;
