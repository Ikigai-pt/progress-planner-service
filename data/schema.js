import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolver';

const typeDefs = `
  type Query {
  author(firstName: String, lastName: String): Author
  allAuthors: [Author]
  allTasks: [Tasks]
  }

  type Author {
    id: Int
    firstName: String
    lastName: String
    posts: [Post]
  }

  type Post {
    id: Int
    title: String
    text: String
    views: Int
    author: Author
  }

  type Tasks {
      id: String,
      title: String,
      description: String,
      category: Int,
      tags: [String],
      type: String,
      frequency: Int,
      startDate: String,
      endDate: String,
      createdAt: String,
      modifiedAt: String
    }
`;

//   type Habits {
//     id: String!,
//     name: String!,
//     description: String,
//     category: Int!,
//     tags: [String],
//     frequency: Int,
//     dataKey: String,
//     dataValue: String,
//     dataUnit: String,
//     startDate: String,
//     endDate: String,
//     createdAt: String!,
//     modifiedAt: String!
//   }

//   type Todos {
//     id: String!,
//     title: String!,
//     description: String,
//     category: Int!,
//     tags: [String],
//     type: String,
//     createdAt: String!,
//     modifiedAt: String!
//   }

//   type Category {
//     id: String!,
//     name: String!,
//     description: String,
//     isActive: String,
//     createdAt: String!,
//     modifiedAt: String!
//     effectiveTill: String
//   }

//   type Tags {
//     id: String!,
//     name: String!
//   }

//   type Frequency {
//     id: String!,
//     monday: Boolean,
//     tuesday: Boolean,
//     wednesday: Boolean,
//     thursday: Boolean,
//     friday: Boolean,
//     saturday: Boolean,
//     sunday: Boolean
//   }
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
