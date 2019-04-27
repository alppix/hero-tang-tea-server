import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    message: String
  }
`;

const resolvers = {
  Query: {
    message: (): string => 'Test message. '
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

export default apolloServer;
