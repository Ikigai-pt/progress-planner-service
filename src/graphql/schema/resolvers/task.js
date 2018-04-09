import { GraphQLDate } from 'graphql-iso-date';
import {
  getTagById,
  getFrequencyById,
  getCategoryById,
  getAllTag,
  getAllFrequency,
  getAllTask,
  getTaskById,
  createTask,
} from '../../service';

const taskResolver = {
  Date: GraphQLDate,

  Query: {
    allTasks(_, args) {
      const tasks = getAllTask();
      return tasks;
    },
    allTags(_, args) {
      return getAllTag();
    },
    allFrequencies(_, args) {
      return getAllFrequency();
    },
    taskById(_, { id }) {
      return getTaskById(id);
    },
    tagById(_, { id }) {
      return getTagById(id);
    },
  },

  Task: {
    category(task) {
      return getCategoryById(task.categoryId)
    },
    tags(task) {
      console.log(" tags "+task.tags)
      return task.tags.map((tag) => getTagById(tag))
    },
    daysOfWeek(task) {
      return getFrequencyById(task.daysOfWeekId)
    },
    goal(task) {
      return getGoalById(task.goalId)
    },
  },

  Mutation: {
    createTask: (root, { task: {
      title,
      description,
      categoryId,
      tags,
      daysOfWeekId,
      priority,
      goalId,
      startDate,
      endDate,
    }}) => {
      return createTask({
      title,
      description,
      categoryId,
      tags,
      daysOfWeekId,
      priority,
      goalId,
      startDate,
      endDate,
      })
    }
  }
};

export default taskResolver;
