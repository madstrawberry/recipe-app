import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import client from './apolloClientSetup';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { theme } from './styles/theme';
import { ThemeProvider } from 'emotion-theming';
import './index.css';

ReactDOM.render(
  (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ThemeProvider>
  ) as any,
  document.getElementById('root')
);

registerServiceWorker();
