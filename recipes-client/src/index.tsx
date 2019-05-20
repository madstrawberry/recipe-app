import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import client from './apolloClientSetup';
import GlobalStyle from './styles/global';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { theme } from './styles/theme';
import { ThemeProvider } from 'emotion-theming';

ReactDOM.render(
  (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ThemeProvider>
  ) as any,
  document.getElementById('root')
);

registerServiceWorker();
