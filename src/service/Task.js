import Mongoose from 'mongoose';
import {Task} from './models/TaskSchema';

const createTask = (newTask) => {
  const task = Task(newTask);
  return task.save();
}

const getAllTask = () => {
  return Task.find({})
}

const getTaskById = (id) => {
  return Task.findOne({_id: Mongoose.mongo.ObjectId(id)})
}

// createTask(exampleTask).then((data)=> console.log(JSON.stringify(data)))

export { createTask, getAllTask, getTaskById }
