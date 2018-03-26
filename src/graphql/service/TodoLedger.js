import {TodoLedger} from '../../models/TodoSchema';

const addToTodoLedger = (newTodo) => {
  const taskLedger = TodoLedger(newTodo);
  return taskLedger.save();
}

const getTodoLedgerByDate = (filterDate) => {
  return TodoLedger.find({date: filterDate})
}

// TODO monogose how to filter between range
const getTodoLedgerByRange = (startDate, endDate) => {
  return TodoLedger.find({date: startDate})
}

export { addToTodoLedger, getTodoLedgerByDate }
