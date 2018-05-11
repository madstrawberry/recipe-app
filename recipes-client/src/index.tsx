import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

client
  .query({
    query: gql`
      {
        allRecipes {
          title
        }
      }
    `,
  })
  .then(result => console.log(result));

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
