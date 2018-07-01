import { ApolloClient } from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { WebSocketLink } from 'apollo-link-ws';
import { withClientState } from 'apollo-link-state';

const appCache = new InMemoryCache();

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/',
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
  credentials: 'same-origin',
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

export interface ClientState {
  editModal: {
    __typename: 'editModal';
    isEditModalOpen: boolean;
    recipeId: string | null;
  };
}

const initialState: ClientState = {
  editModal: {
    __typename: 'editModal',
    isEditModalOpen: false,
    recipeId: null,
  },
};

const clientStateLink = withClientState({
  cache: appCache,
  resolvers: {},
  defaults: initialState,
});

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        );
      }
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
      }
    }),
    clientStateLink,
    link,
  ]),
  cache: appCache,
});

export default client;
