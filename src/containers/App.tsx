import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@material-ui/core';
import React, { lazy, Suspense } from 'react';
import { hot, setConfig } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CApolloProvider from '../components/CApolloProvider';
import Navbar from '../components/Navbar';
import { darkTheme } from '../themes/dark';
import './../assets/scss/App.scss';
import ErrorBoundary from './ErrorBoundary';

const Landing = lazy(() => import('./Landing'));
const NotFound = lazy(() => import('./NotFound'));

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <CApolloProvider>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <Landing />
                </Route>
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </CApolloProvider>
      </Router>
    </ThemeProvider>
  );
};

declare let module: Record<string, unknown>;

setConfig({
  showReactDomPatchNotification: false,
});

export default hot(module)(App);
