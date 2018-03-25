import casual from 'casual';
import Moment from 'moment';
import _ from 'lodash';
import Mongoose from 'mongoose';
import { createCategory } from './service/Category';
import { createTag} from './service/Tag';
import { createFrequency } from './service/Frequency';
import { createGoal } from './service/Goal';
import { createTask } from './service/Task';
import { addToTaskLedger } from './service/TaskLedger';

Mongoose.Promise = global.Promise;

const mongo = Mongoose.connect('mongodb://localhost/progressPlanner', () =>{
  Mongoose.connection.db.dropDatabase();
  generateLookUpTables()
  setTimeout(() =>{
      generateGoals()
    }, 1000);

  setTimeout(() =>{
      generateTasks()
    }, 1000);

  setTimeout(() =>{
      generateTaskLedger()
    }, 1000);
});

const categoryIds = [];
const freqIds = [];
const tagIds = [];
const goalIds = [];
const taskIds = [];
const todoIds = [];
const habitIds = [];

const generateLookUpTables = () => {
  // Generate seed data
  casual.seed(123);
  const CategoryList = ['Health and fitness', 'Intellectual', 'Spritiual',
    'Relationships', 'Financial', 'Career', 'Parenting', 'Social' ];
  // Generate Categories
  _.times(10, () => {
    createCategory({
      title: casual.random_element(CategoryList),
      description:casual.description
      })
      .then((category) => categoryIds.push(category.id))
  })

  // Generate Frequencies
  _.times(10, () => {
    createFrequency({
      monday: casual.boolean,
      tuesday: casual.boolean,
      wednesday: casual.boolean,
      thursday: casual.boolean,
      friday: casual.boolean,
      saturday: casual.boolean,
      sunday: casual.boolean,
    }).then((freq) => freqIds.push(freq.id))
  })

  // Generage Tags
  _.times(10, () => createTag({ name: casual.word })
    .then((tag)=> tagIds.push(tag.id)))

}

const randomDate = () => {
  return Moment(new Date()).add(casual.integer(1, 12), 'M').format('YYYY-MM-DD')
}

const genDatePlusMinus = (date) => {
  let counter = 7;
  const dates = _.times(14, () => Moment(date).add(counter--, 'D').format('YYYY-MM-DD'))
  console.log(dates)
  return dates;
}

const generateGoals = () => {
  // Generate Goals
  _.times(10, () => {
    createGoal({
      title: casual.title,
      description: casual.description,
      userId: 1,
      startDate: randomDate(),
      endDate: randomDate(),
      categoryId: casual.random_element(categoryIds)
    }).then((goal) => goalIds.push(goal.id))
  })
}

const generateTasks = () => {

  const TaskType = ['RECURRING', 'ONETIME'];
  const Priority = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];
  // Generate Tasks
  _.times(10, () => {
    createTask({
      title: casual.title,
      description: casual.description,
      userId: 1,
      goalId: casual.random_element(goalIds),
      type: casual.random_element(TaskType),
      priority: casual.random_element(Priority),
      daysOfWeek: casual.random_element(freqIds),
      tags: _.times(3,() => casual.random_element(tagIds)),
      categoryId: casual.random_element(categoryIds),
      startDate: randomDate(),
      endDate: randomDate(),
    }).then((task)=> taskIds.push(task.id))
  })
}

const generateTaskLedger = () => {
  const Status = ['COMPLETE', 'NOT_DONE'];
  const DateRange = genDatePlusMinus(new Date());

  _.times(10, () => {
    addToTaskLedger({
      taskId: casual.random_element(taskIds),
      status: casual.random_element(Status),
      date: casual.random_element(DateRange)
    })
  })
}