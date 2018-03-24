import { createTask } from './service/Task';
import { addToTaskLedger } from './service/TaskLedger'

const exampleTask = {
  title: 'Go to Gym',
  description: ' Fitness',
  category: 1 ,
  tags: ['fitness', 'health'],
  type: 'recurring',
  frequency: 2,
  startDate: new Date(),
  endDate: new Date(),
}

const task1 = createTask(exampleTask).then((result) => result);
console.log("NEW TASK :"+JSON.stringify(task1))

const exampleTaskLedger = {
  taskId: task1._id,
  status: 'COMPLETE',
  date: new Date(),
}

const taskLedger1 = addToTaskLedger(exampleTaskLedger)


