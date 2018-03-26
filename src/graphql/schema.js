import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolver';
import { taskType, taskQueries } from './queries/task';
import { categoryType, categoryQueries } from './queries/category';
import { tagType, tagQueries } from './queries/tag';
import { frequencyType, frequencyQueries } from './queries/frequency';

const typeDefs = `
# declare custom scalars
 scalar Date

 type Query {
  ${taskQueries}
  ${categoryQueries}
  ${tagQueries}
  ${frequencyQueries}
 }

 ${taskType}
 ${frequencyType}
 ${tagType}
 ${categoryType}

`;

const typeDefsOld = `
  type Query {
    allTasks: [Tasks]
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

console.log(typeDefs)
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
