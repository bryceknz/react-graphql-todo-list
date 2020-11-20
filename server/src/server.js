const { GraphQLServer } = require('graphql-yoga')

const data = require('./data')

// Type definitions
const typeDefs = `
  type Query {
    todos: [TodoItem!]!
  }

  type TodoItem {
    id: ID!
    text: String!
    completed: Boolean!
  }
`

// Resolvers
const resolvers = {
  Query: {
    todos: () => data.todos,
  },
}

// GraphQL server
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

module.exports = server
