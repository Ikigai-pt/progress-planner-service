const taskType = `
  type Task {
      id: String,
      title: String,
      description: String,
      category: Category,
      tags: [Tag],
      type: String,
      daysOfWeek: Frequency,
      startDate: Date,
      endDate: Date,
      createdAt: Date,
      modifiedAt: Date
    }
`;

const taskQueries = `
  allTasks: [Task]
`;

export { taskType, taskQueries };
// taskById: Task,
// taskByUserId: [Task],
