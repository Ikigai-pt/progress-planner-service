const categoryType = `
  type Category {
    id: String!,
    title: String!,
    description: String,
    createdAt: String!,
    modifiedAt: String!
  }
`
const categoryQueries = `
  allCategories: [Category]
`;

export { categoryType, categoryQueries }
