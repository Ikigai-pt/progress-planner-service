import path from 'path';
import {
    fileLoader,
    mergeResolvers,
  } from 'merge-graphql-schemas';

const base = process.cwd();
const resolvers = fileLoader(path.join(base, '/src/graphql/schema/resolvers'));

export default mergeResolvers(resolvers);
