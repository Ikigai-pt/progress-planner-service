import fetch from 'node-fetch';
import faker from 'faker';

export const getTasks = () => {
    const tasksCount = faker.random.number({min:1, max:15});

  const tasks = new Promise(resolve =>
    setTimeout(() =>
      resolve(
            new Array(tasksCount).fill(undefined).map(() => ({
          id: faker.random.uuid(),
          title: faker.lorem.sentence(),
          description: faker.lorem.sentence(),
          category: faker.random.word(),
          tags: faker.random.words().toString().split(' '),
          frequency: faker.random.number({min:1, max:5}),
          startDate: faker.date.past(),
          endDate: faker.date.future(),
          createdAt: faker.date.recent(),
          modifiedAt: faker.date.recent(),
            }))), 100),);
    console.log(tasks)
  return tasks;
};

