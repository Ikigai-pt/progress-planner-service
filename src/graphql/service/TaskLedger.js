import {TaskLedger} from '../../models/TaskSchema';

const addToTaskLedger = (newTask) => {
  const taskLedger = TaskLedger(newTask);
  return taskLedger.save();
}

const getTaskLedgerByDate = (filterDate) => {
  return TaskLedger.find({date: filterDate})
}

// TODO monogose how to filter between range
const getTaskLedgerByRange = (startDate, endDate) => {
  return TaskLedger.find({date: startDate})
}

export { addToTaskLedger, getTaskLedgerByDate }
