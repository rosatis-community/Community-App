import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { Suspense } from 'react';
import { hot, setConfig } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CApolloProvider from '../components/CApolloProvider';
import Navbar from '../components/Navbar';
import { routes } from '../router/routes';
import { darkTheme } from '../themes/dark';
import './../assets/scss/App.scss';
import ErrorBoundary from './ErrorBoundary';

const routeComponents = routes.map(({ exact, path, component }, key) => (
  <Route exact={exact} path={path} component={component} key={key} />
))

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <ErrorBoundary>
          <CApolloProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <Navbar />
              <Switch>
                {routeComponents}
              </Switch>
            </Suspense>
          </CApolloProvider>
        </ErrorBoundary>
      </Router>
    </ThemeProvider>
  );
};

declare let module: Record<string, unknown>;

setConfig({
  showReactDomPatchNotification: false,
});

export default hot(module)(App);
