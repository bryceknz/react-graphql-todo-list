const { GraphQLServer } = require('graphql-yoga')

const todos = [...require('./data').todos]

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
    addTodo(text: String!): TodoItem!
  }
`

// Resolvers
const resolvers = {
  Query: {
    todos: () => todos,
  },
  Mutation: {
    toggleComplete: (parent, args) => {
      const itemTotoggle = todos.find((item) => item.id === args.id)
      itemTotoggle.completed = !itemTotoggle.completed
      return itemTotoggle
    },
    addTodo: (parent, args) => {
      const newTodo = {
        id: todos.length + '',
        text: args.text,
        completed: false,
      }
      todos.push(newTodo)
      return newTodo
    },
  },
}

// GraphQL server
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

module.exports = server
