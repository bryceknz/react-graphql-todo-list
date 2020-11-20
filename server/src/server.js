const { GraphQLServer } = require('graphql-yoga')

const data = require('./data')

// Type definitions
const typeDefs = `
  type Query {
    info: String!
  }
`

// Resolvers
const resolvers = {
  Query: {
    info: () => data.info,
  },
}

// GraphQL server
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

module.exports = server
