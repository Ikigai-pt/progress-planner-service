import GraphQLDate from 'graphql-date';
import {
  getAllCategory,
  getAllTag,
  getAllFrequency,
  getAllTask,
  getAllTodo,
} from './service';

const resolvers = {
  Date: GraphQLDate,
  Query: {
    allTasks(_, args) {
      const tasks = getAllTask();
      return tasks;
    },
    allCategories(_, args) {
      return getAllCategory();
    },
    allTags(_, args) {
      return getAllTag();
    },
    allFrequencies(_, args) {
      return getAllFrequency();
    }
  },
};

export default resolvers;
