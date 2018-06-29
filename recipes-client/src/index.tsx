import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import client from './apolloClientSetup';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import './index.css';

ReactDOM.render(
  (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  ) as any,
  document.getElementById('root')
);

registerServiceWorker();
