import {Task} from '../model/TaskSchema';

// const exampleTask = {
//   title: 'Go to Gym',
//   description: ' Fitness',
//   category: 1 ,
//   tags: ['fitness', 'health'],
//   type: 'recurring',
//   frequency: 2,
//   startDate: new Date(),
//   endDate: new Date(),
// }

const createTask = (newTask) => {
  const task = Task(newTask);
  return task.save();
}

const getAllTask = () => {
  return Task.find({})
}

const getTaskById = (id) => {
  return Task.find({_id: id})
}

// createTask(exampleTask).then((data)=> console.log(JSON.stringify(data)))

export { createTask, getAllTask }
