import {TaskLedger} from '../model/TaskSchema';

// const exampleTaskLedger = {
//   taskId: 1,
//   status: 'COMPLETE',
//   date: new Date(),
// }

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

// addToTaskLedger(exampleTaskLedger).then((data)=> console.log(JSON.stringify(data)))

export { addToTaskLedger, getTaskLedgerByDate }
