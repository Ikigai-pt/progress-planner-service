import Mongoose from 'mongoose';
import casual from 'casual';
import _ from 'lodash';
import { createTask } from './service/Task';
import { addToTaskLedger } from './service/TaskLedger'

Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect('mongodb://localhost/progressPlanner');

const exampleTask = {
  title: 'Go to Gym',
  description: ' Fitness',
  category: 1 ,
  tags: ['fitness', 'health'],
  type: 'RECURRING',
  daysOfWeek: 2,
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

// Generate Mock Data
casual.seed(123);
_.times(10, ()=>{

})
