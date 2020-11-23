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

  type Mutation {
    toggleComplete(id: ID!): TodoItem!
  }
`

// Resolvers
const resolvers = {
  Query: {
    todos: () => data.todos,
  },
  Mutation: {
    toggleComplete: (root, args) => {
      const itemTotoggle = data.todos.find((item) => item.id === args.id)
      itemTotoggle.completed = !itemTotoggle.completed
      return itemTotoggle
    },
  },
}

// GraphQL server
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

module.exports = server
