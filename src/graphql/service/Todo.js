import {Todo} from '../../models/TodoSchema';

const createTodo = (newTodo) => {
  const task = Todo(newTodo);
  return task.save();
}

const getAllTodo = () => {
  return Todo.find({})
}

const getTodoById = (id) => {
  return Todo.find({_id: id})
}

// createTodo(exampleTodo).then((data)=> console.log(JSON.stringify(data)))

export { createTodo, getAllTodo }
