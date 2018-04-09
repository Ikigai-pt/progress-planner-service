import Mongoose from 'mongoose';
import {Todo} from '../../models/TodoSchema';

const createTodo = (newTodo) => {
  const task = Todo(newTodo);
  return task.save();
}

const getAllTodo = () => {
  return Todo.find({})
}

const getTodoById = (id) => {
  return Todo.findOne({_id: Mongoose.mongo.ObjectId(id)})
}

// createTodo(exampleTodo).then((data)=> console.log(JSON.stringify(data)))

export { createTodo, getAllTodo, getTodoById }
