import path from 'path';
import {
    fileLoader,
    mergeTypes,
  } from 'merge-graphql-schemas';

const base = process.cwd();

const typesArray = fileLoader(path.join(base, './src/graphql/schema/types'));
export default mergeTypes(typesArray, { all: true });
