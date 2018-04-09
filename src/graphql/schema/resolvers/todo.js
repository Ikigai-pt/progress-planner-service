import { GraphQLDate } from 'graphql-iso-date';
import {
  getAllTodo,
  getTodoById,
  createTodo,
  getTagById,
  getCategoryById,
} from '../../service';

const todoResolver = {
  Date: GraphQLDate,

  Query: {
    allTodos(_, args) {
      return getAllTodo();
    },
    todoById(_, { id }) {
      return getTodoById(id);
    }
  },

  Todo: {
    tags(task) {
      return task.tags.map((tag) => getTagById(tag))
    },
    category(task) {
      return getCategoryById(task.categoryId)
    }
  },

  Mutation: {
    createTodo: ( root, { todo: {
      title,
      userId,
      categoryId,
      tags,
      priority,
      deadLine,
    }} ) => {
      return createTodo({
      title,
      userId,
      categoryId,
      tags,
      priority,
      deadLine,
      });
    }
  }

};

export default todoResolver;
