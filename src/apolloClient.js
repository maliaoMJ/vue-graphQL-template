import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql'
});

const cache = new InMemoryCache();

export default new ApolloClient({
  link: httpLink,
  cache
});