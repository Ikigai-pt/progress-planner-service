import { getAllTask } from './service/Task';

const resolvers = {
  Query: {
    allTasks(_, args) {
      const tasks = getAllTask();
      console.log(" Fetch tasks")
      return tasks;
    }
  },
};

export default resolvers;
