const frequencyType = `
  type Frequency {
    id: String!,
    monday: Boolean,
    tuesday: Boolean,
    wednesday: Boolean,
    thursday: Boolean,
    friday: Boolean,
    saturday: Boolean,
    sunday: Boolean
  }
`;

const frequencyQueries = `
  allFrequencies: [Frequency]
`;

export { frequencyType, frequencyQueries }
