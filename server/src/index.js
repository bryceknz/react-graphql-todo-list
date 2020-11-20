const { GraphQLServer } = require('graphql-yoga')

// Type definitions
const typeDefs = `
  type Query {
    info: String!
  }
`

// Resolvers
const resolvers = {
  Query: {
    info: () => `This is your GraphQL API`
  }
}

// GraphQL server
const server = new GraphQLServer({
  typeDefs,
  resolvers
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
