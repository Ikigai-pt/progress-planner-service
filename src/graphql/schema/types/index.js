import path from 'path';
import {
    fileLoader,
    mergeTypes,
  } from 'merge-graphql-schemas';

const base = process.cwd();

console.log(path.join(__dirname, './types'))
const typesArray = fileLoader(path.join(base, './src/graphql/schema/types'));
console.log((typesArray))
export default mergeTypes(typesArray, { all: true });
