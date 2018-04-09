import GraphQLDate from 'graphql-date';
import {
  getAllCategory,
  getCategoryById,
  getTagById,
  getGoalById,
  getFrequencyById,
  getAllTag,
  getAllFrequency,
  getAllTask,
  getAllTodo,
} from '../../service';

const taskResolvers = {
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
    },
    categoryById(_, { id }) {
      // getCategoryById(id).then((cat) => console.log(id+" data"+cat));
      return getCategoryById(id);
    }
  },
  Task: {
    category(task) {
      return getCategoryById(task.categoryId)
    },
    tags(task) {
      return task.tags.map((tag) => getTagById(tag))
    },
    daysOfWeek(task) {
      return getFrequencyById(task.daysOfWeek)
    },
    goal(task) {
      return getGoalById(task.goalId)
    }
  }
};

export default taskResolvers;
