import casual from 'casual';
import Moment from 'moment';
import _ from 'lodash';
import Aigle from 'aigle';
import Mongoose from 'mongoose';
import {
  createCategory,
  createTag,
  createFrequency,
  createGoal,
  createTask,
  createHabit,
  createTodo,
  addToTaskLedger,
  addToTodoLedger,
  addToHabitLedger
} from './service';

Mongoose.Promise = global.Promise;
Aigle.mixin(_);

const categoryIds = [];
const freqIds = [];
const tagIds = [];
const goalIds = [];
const taskIds = [];
const todoIds = [];
const habitIds = [];

casual.seed(123);
const mongo = Mongoose.connect("mongodb://localhost:27017/progressPlanner", async () =>{
  Mongoose.connection.db.dropDatabase();
  await generateLookUpTables();
  console.log(" Created lookup values");
  await generateGoals();
  console.log(" Created Goals");
  await generateEntitySeedData();
  console.log(" Created Entities");
  await generateLedgers();
  console.log(" Created leadgers");
});

const generateLookUpTables = async () => {
  // Generate seed data
  const CategoryList = ['Health and fitness', 'Intellectual', 'Spritiual',
    'Relationships', 'Financial', 'Career', 'Parenting', 'Social' ];
  // Generate Categories
  await Aigle.times(10, () => {
    const category = createCategory({
      title: casual.random_element(CategoryList),
      description:casual.description
      })
      .then((category) => categoryIds.push(category.id))
  })

  // Generate Frequencies
   await Aigle.times(10, () => {
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
  await Aigle.times(10, () => createTag({ name: casual.word })
    .then((tag)=> tagIds.push(tag.id)))

}

const generateGoals = async () => {
  // Generate Goals
   await Aigle.times(10, () => {
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

const generateEntitySeedData = async () => {

  const TaskType = ['RECURRING', 'ONETIME'];
  const Priority = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'];
  // Generate Tasks
  await Aigle.times(10, () => {
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
      goalId: casual.random_element(goalIds),
      startDate: randomDate(),
      endDate: randomDate(),
    }).then((task)=> taskIds.push(task.id))
  })

  await Aigle.times(10, () => {
    createTodo({
      title: casual.title,
      userId: 1,
      categoryId: casual.random_element(categoryIds),
      tags: _.times(3,() => casual.random_element(tagIds)),
      priority: casual.random_element(Priority),
      deadLine: randomDate(),
    }).then((todo)=> todoIds.push(todo.id))
  })

  await Aigle.times(10, () => {
    createHabit({
      title: casual.title,
      description: casual.description,
      userId: 1,
      categoryId: casual.random_element(categoryIds),
      tags: _.times(3,() => casual.random_element(tagIds)),
      daysOfWeek: casual.random_element(freqIds),
      // unit:
      progress: casual.random_element(['INCREASE', 'DECREASE']),
      goalId: casual.random_element(goalIds),
      startDate: randomDate(),
      endDate: randomDate(),
      priority: casual.random_element(Priority),
      deadLine: randomDate(),
    }).then((habit)=> habitIds.push(habit.id))
  })
}

const generateLedgers = async () => {
  const Status = ['COMPLETE', 'NOT_DONE'];
  const DateRange = genDatePlusMinus(new Date());

  await Aigle.times(10, () => {
    addToTaskLedger({
      taskId: casual.random_element(taskIds),
      status: casual.random_element(Status),
      date: casual.random_element(DateRange)
    })
  })

  await Aigle.times(10, () => {
    addToTodoLedger({
      todoId: casual.random_element(todoIds),
      status: casual.random_element(Status),
      date: casual.random_element(DateRange)
    })
  })

  await Aigle.times(10, () => {
    addToHabitLedger({
      habitId: casual.random_element(habitIds),
      status: casual.random_element(Status),
      //measurement
      date: casual.random_element(DateRange)
    })
  })
}

const randomDate = () => {
  return Moment(new Date()).add(casual.integer(1, 12), 'M').format('YYYY-MM-DD')
}

const genDatePlusMinus = (date) => {
  let counter = 7;
  const dates = _.times(14, () => Moment(date).add(counter--, 'D').format('YYYY-MM-DD'))
  return dates;
}

