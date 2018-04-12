import { GraphQLDate } from 'graphql-iso-date';
import {
  getAllCategory,
  getCategoryById,
  createCategory,
} from 'service';

const cateogryResolver = {
  Date: GraphQLDate,

  Query: {
    allCategories(_, args) {
      return getAllCategory();
    },
    categoryById(_, { id }) {
      return getCategoryById(id);
    }
  },

  Mutation: {
    createCategory: (root, { category: { title, description } }) => {
      return createCategory({
        title,
        description,
      });
    }
  }

};

export default cateogryResolver;
