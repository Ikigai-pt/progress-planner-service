const tagType = `
  type Tag {
    id: String!,
    name: String!,
    createdAt: String!,
    modifiedAt: String!
  }
`
const tagQueries = `
  allTags: [Tag]
`;

export { tagType, tagQueries }
